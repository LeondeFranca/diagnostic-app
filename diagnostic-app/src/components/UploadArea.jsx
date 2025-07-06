import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const UploadArea = ({ onImageUpload }) => {
  const { t } = useTranslation();
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    onImageUpload(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Box mt={4} textAlign="center">
      <input
        accept="image/*"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="upload-input"
      />
      <label htmlFor="upload-input">
        <Button variant="contained" component="span" color="primary">
          {t("upload.button")}
        </Button>
      </label>

      {imagePreview && (
        <Box mt={3}>
          <Typography variant="subtitle2" gutterBottom>
            {t("upload.preview")}
          </Typography>
          <img
            src={imagePreview}
            alt="Pré-visualização"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default UploadArea;
