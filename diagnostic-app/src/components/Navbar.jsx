import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
  Link,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1565c0",
        height: "56px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "56px",
          px: 2,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" fontSize="1.2rem">
          {t("title")}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
          <Link href="#artigo" underline="hover" color="inherit" fontSize="0.85rem">
            {t("navbar.article")}
          </Link>
          <Link href="#creditos" underline="hover" color="inherit" fontSize="0.85rem">
            {t("navbar.credits")}
          </Link>

          <Select
            size="small"
            value={i18n.language}
            onChange={handleLanguageChange}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
              height: "28px",
              fontSize: "0.85rem",
              minWidth: "110px",
            }}
          >
            <MenuItem value="pt">Português</MenuItem>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
