// src/components/ModelInfoAccordion.jsx
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const ModelInfoAccordion = () => {
  const { t } = useTranslation();

  return (
    <Accordion sx={{ mt: 3 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography fontWeight="bold">ℹ️ {t("model_info.title")}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" color="primary">
            🧠 {t("model_info.cnn.title")}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t("model_info.cnn.desc")}<br />
            <strong>🔹 {t("model_info.cnn.accuracy")}</strong>
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" color="warning.main" mt={2}>
            🧮 {t("model_info.svm.title")}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t("model_info.svm.desc")}<br />
            <strong>🟡 {t("model_info.svm.accuracy")}</strong>
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" color="success.main" mt={2}>
            🌲 {t("model_info.rf.title")}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t("model_info.rf.desc")}<br />
            <strong>🟢 {t("model_info.rf.accuracy")}</strong>
          </Typography>

          <Box mt={3} p={2} bgcolor="#e3f2fd" borderRadius={2}>
            <Typography variant="body2" fontWeight="bold">
              💡 {t("model_info.tip")}
            </Typography>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ModelInfoAccordion;
