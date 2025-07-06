import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ModelSelector = ({ selectedModel, setSelectedModel }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 4 }}>
      <FormControl fullWidth>
        <InputLabel>{t("model_selector.label")}</InputLabel>
        <Select
          value={selectedModel}
          label={t("model_selector.label")}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <MenuItem value="cnn">{t("model_selector.cnn")}</MenuItem>
          <MenuItem value="svm">{t("model_selector.svm")}</MenuItem>
          <MenuItem value="rf">{t("model_selector.rf")}</MenuItem>
        </Select>
      </FormControl>

      <Typography sx={{ mt: 2 }} variant="body2">
        <strong>{t("model_selector.about")}</strong><br />
        <strong>{t("model_selector.cnn")}:</strong> {t("model_selector.desc_cnn")}<br />
        <strong>{t("model_selector.svm")}:</strong> {t("model_selector.desc_svm")}<br />
        <strong>{t("model_selector.rf")}:</strong> {t("model_selector.desc_rf")}
      </Typography>
    </Box>
  );
};

export default ModelSelector;
