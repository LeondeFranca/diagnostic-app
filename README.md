# 📊 Diagnóstico de Pneumonia por Imagem

Este projeto é uma aplicação web que utiliza **inteligência artificial** para auxiliar no **diagnóstico de pneumonia** a partir de **imagens de raio-X de tórax**. O sistema permite o upload de uma imagem, escolha do modelo de IA, e retorna o resultado com uma estimativa de confiança.

## 🚀 Demonstração

> Em breve: Link de acesso público com frontend + backend online.

---

## 📷 Tecnologias Utilizadas

### 🧠 Backend (Flask - Python)
- Flask
- TensorFlow / Keras (modelo CNN)
- Scikit-learn (modelos SVM e Random Forest)
- OpenCV / Pillow (processamento de imagem)
- Flask-CORS (para comunicação com o frontend)

### 🌐 Frontend (React - Vite)
- React com Vite
- MUI (Material UI) para estilização
- i18next (tradução: português, inglês e espanhol)
- React Router DOM

---

## 📦 Instalação Local

### Backend (Flask)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install -r requirements.txt
python app.py
```

### Frontend (React)
```bash
cd diagnostic-app
npm install
npm run dev
```

---

## ⚙️ Funcionalidades

- Upload de imagem de raio-X.
- Seleção entre 3 modelos de IA:
  - CNN (mais preciso)
  - SVM
  - Random Forest
- Exibição de diagnóstico e nível de confiança.
- Página “Sobre” com explicação do projeto, artigo e equipe.
- Suporte multilíngue: 🇧🇷 🇺🇸 🇪🇸
- Interface responsiva, leve e clara.

---

## 📄 Artigo Científico

O projeto também resultou em um artigo detalhado sobre as abordagens utilizadas:

🔗 [Clique aqui para acessar o PDF](https://drive.google.com/file/d/12dEBaoJ9afYAnngHYF7RgdgEA0czDYZW/view?usp=sharing)

---

## 👨‍💻 Equipe do Projeto

| Nome | Função | LinkedIn |
|------|--------|----------|
| **Leon de França** | Desenvolvedor fullstack, integração dos modelos e Responsável pela construção e validação do modelo de CNN | [LinkedIn](https://www.linkedin.com/in/leon-trindade-805232246/) |
| **Lucas Alves** | Responsável pela construção e validação do modelo de Random Forest e apoio no artigo | [LinkedIn](https://www.linkedin.com/in/lucasalves0909/) |
| **Igor Gabriel** | Responsável pela construção e validação do modelo de SVM  e apoio no artigo  | [LinkedIn](https://www.linkedin.com/in/igorgabriel-dev/) |
| **Manoel Serrano** | colaborador no artigo científico e suporte geral ao projeto. | [LinkedIn](https://www.linkedin.com/in/manoel-leonardo-carneiro-sette-serrano-a92b47210/) |
| **Prof. Vinícius Amador** |Professor e orientador | [LinkedIn](https://www.linkedin.com/in/vin%C3%ADcius-costa-amador-684484241/) |
| **Prof. Flávio Fonseca** | Professor e orientador | [LinkedIn](https://www.linkedin.com/in/fl%C3%A1vio-fonseca-02ab9585/) |

---

## 📁 Estrutura do Projeto

```bash
/
├── backend/  # API Flask + modelos treinados
│   ├── models/
│        ├── cnn_model.h5
│        ├── svm_model.pkl
│        ├── rf_model.pkl
│        ├── scaler.pkl
│        ├── label_enconder.pkl
│   ├── utils/  
│        ├──preprocess.py
│   ├── app.py
│   └── requirements.txt
├── diagnostic-app/               # Frontend Aplicação React
│   ├── src/
│   │   ├── components/
│   │       ├── About.jsx
│   │       ├── ModelInfoAccordion.jsx
│   │       ├── ModelSelector.jsx
│   │       ├── Navbar.jsx
│   │       ├── ResultDisplay.jsx
│   │       ├── UploadArea.jsx
│   │   ├── i18n/
│   │       ├── en.json
│   │       ├── es.json
│   │       ├── pt.json
│   ├── App.css
│   ├── App.jsx
│   ├── i18n.js
│   ├── index.css
│   ├── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json         
│   └── vite.config.js
└── README.md
```

---

## 🛡️ Considerações Éticas

> Este sistema **não substitui um diagnóstico médico profissional**. Ele atua como uma ferramenta de apoio. Sempre consulte um especialista para decisões clínicas.

---

## 📬 Contato

Se quiser saber mais, contribuir ou conversar sobre IA na saúde:

- Leon de França – [LinkedIn](https://www.linkedin.com/in/leon-trindade-805232246/)
- Email: **leon.franca75@gmail.com**

---

## 📘 Licença

Este projeto é de código aberto sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.