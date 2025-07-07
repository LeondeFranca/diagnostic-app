// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Adicionado
import Navbar from "./components/Navbar";
import UploadArea from "./components/UploadArea";
import ModelSelector from "./components/ModelSelector";
import ResultDisplay from "./components/ResultDisplay";
import ModelInfoAccordion from "./components/ModelInfoAccordion";
import About from "./components/About"; // ✅ Página nova
import { useTranslation } from "react-i18next";
import { Button, Box, Container, Typography } from "@mui/material";

function Home() {
  const { t } = useTranslation();
  const [selectedModel, setSelectedModel] = useState("cnn");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDiagnose = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("model", selectedModel);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao diagnosticar");
      }

      const data = await response.json();
      setResult(data.class);
      setConfidence(data.confidence);
    } catch (error) {
      console.error("Erro:", error);
      setResult(null);
      setConfidence(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, py: 5, bgcolor: "#f9f9f9", borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {t("title")}
      </Typography>

      <ModelSelector selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
      <ModelInfoAccordion />
      <UploadArea onImageUpload={setFile} />

      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDiagnose}
          disabled={!file}
        >
          {t("diagnose_button")}
        </Button>
      </Box>

      <ResultDisplay result={result} confidence={confidence} loading={loading} />
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} /> {/* ✅ Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;
