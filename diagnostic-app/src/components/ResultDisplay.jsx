import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ResultDisplay = ({ result, confidence, loading }) => {
  const { t } = useTranslation();

  if (loading) {
    return (
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
        <Typography>{t("result.loading")}</Typography>
      </Box>
    );
  }

  if (!result) return null;

  const color = result === 'Normal' ? 'green' : 'red';

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h6" sx={{ color }}>
        {t("result.diagnosis")}: {result}
      </Typography>
      <Typography variant="body2">
        {t("result.confidence")}: {confidence}%
      </Typography>
    </Box>
  );
};

export default ResultDisplay;
