from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import numpy as np
import tensorflow as tf
import joblib
import cv2
from utils.preprocess import preprocess_image

app = Flask(__name__)
CORS(app)

# Carregamento dos modelos
cnn_model = tf.keras.models.load_model("models/cnn_model.h5")
svm_model = joblib.load("models/svm_model.pkl")
rf_model = joblib.load("models/rf_model.pkl")  # RF baseado em features

# Carregamento do scaler e encoder para SVM
scaler = joblib.load("models/scaler.pkl")
encoder = joblib.load("models/label_encoder.pkl")

CLASSES = list(encoder.classes_)  # ['Bacterial', 'Normal', 'Viral']

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files.get("file")
    model_type = request.form.get("model")

    print("🔍 DEBUG: file =", file)
    print("🔍 DEBUG: model_type =", model_type)

    if not file or model_type not in ["cnn", "svm", "rf"]:
        print("❌ Requisição inválida")
        return jsonify({"error": "Requisição inválida"}), 400

    if not os.path.exists("uploads"):
        os.makedirs("uploads")

    file_path = os.path.join("uploads", file.filename)
    file.save(file_path)

    try:
        if model_type == "cnn":
            image = preprocess_image(file_path, as_gray=False, target_size=(224, 224))
            prediction = cnn_model.predict(np.expand_dims(image, axis=0))[0]
            class_index = int(np.argmax(prediction))
            confidence = float(prediction[class_index]) * 100

        elif model_type == "svm":
            img = cv2.imread(file_path)
            img = cv2.resize(img, (64, 64))
            img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            img = cv2.equalizeHist(img)
            flat_image = img.flatten().reshape(1, -1)
            flat_image = scaler.transform(flat_image)

            prediction = svm_model.predict_proba(flat_image)[0]
            class_index = int(np.argmax(prediction))
            confidence = float(prediction[class_index]) * 100

        elif model_type == "rf":
            # Importações específicas apenas quando RF for usado
            from tensorflow.keras.applications import DenseNet121
            from tensorflow.keras.applications.densenet import preprocess_input
            from tensorflow.keras.models import Model
            from tensorflow.keras.layers import GlobalAveragePooling2D
            from PIL import Image

            # Carrega imagem e pré-processa para DenseNet
            img = Image.open(file_path).convert("RGB")
            img = img.resize((224, 224))
            img_array = np.array(img)
            img_array = preprocess_input(img_array)
            img_array = np.expand_dims(img_array, axis=0)

            # Cria extrator de features
            base_model = DenseNet121(weights="imagenet", include_top=False, input_shape=(224, 224, 3))
            x = base_model.output
            x = GlobalAveragePooling2D()(x)
            feature_extractor = Model(inputs=base_model.input, outputs=x)

            features = feature_extractor.predict(img_array)
            prediction = rf_model.predict_proba(features)[0]
            class_index = int(np.argmax(prediction))
            confidence = float(prediction[class_index]) * 100

    except Exception as e:
        print("❌ Erro durante predição:", str(e))
        return jsonify({"error": f"Erro na predição: {str(e)}"}), 500
    finally:
        if os.path.exists(file_path):
            os.remove(file_path)

    return jsonify({
        "class": CLASSES[class_index],
        "confidence": round(confidence, 2)
    })

if __name__ == "__main__":
    app.run(debug=True)
