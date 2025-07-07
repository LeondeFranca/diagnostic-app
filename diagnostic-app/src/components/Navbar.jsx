// Navbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useLocation } from "react-router-dom"; // ✅ Adiciona useLocation

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation(); // ✅ Pega a rota atual

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
        <MuiLink
          component={RouterLink}
          to="/"
          underline="none"
          color="inherit"
          fontSize="1.2rem"
          fontWeight="bold"
        >
          {t("title")}
        </MuiLink>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
          {/* ✅ Mostra "Início" somente na rota /sobre */}
          {location.pathname === "/sobre" && (
            <MuiLink
              component={RouterLink}
              to="/"
              underline="hover"
              color="inherit"
              fontSize="0.85rem"
            >
              {t("navbar.home")}
            </MuiLink>
          )}

          <MuiLink
            component={RouterLink}
            to="/sobre"
            underline="hover"
            color="inherit"
            fontSize="0.85rem"
          >
            {t("navbar.about")}
          </MuiLink>

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
