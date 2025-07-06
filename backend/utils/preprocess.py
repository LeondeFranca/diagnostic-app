import cv2
import numpy as np

def preprocess_image(image_path, as_gray=False, target_size=(224, 224)):
    if as_gray:
        image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    else:
        image = cv2.imread(image_path)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    image = cv2.resize(image, target_size)
    image = image.astype("float32") / 255.0
    return image
