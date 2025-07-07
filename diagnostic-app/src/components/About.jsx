// src/pages/About.jsx
import React from "react";
import { Box, Typography, Container, Link, Avatar, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    name: "Leon de França",
    descriptionKey: "about_page.leon",
    linkedin: "https://www.linkedin.com/in/leon-trindade-805232246/",
    avatar: "https://avatars.githubusercontent.com/u/151105361?v=4",
  },
  {
    name: "Lucas Alves",
    descriptionKey: "about_page.lucas",
    linkedin: "https://www.linkedin.com/in/lucasalves0909/",
    avatar: "https://avatars.githubusercontent.com/u/64313623?v=4",
  },
  {
    name: "Igor Gabriel",
    descriptionKey: "about_page.igor",
    linkedin: "https://www.linkedin.com/in/igorgabriel-dev/",
    avatar: "https://avatars.githubusercontent.com/u/118323242?v=4",
  },
  {
    name: "Manoel Serrano",
    descriptionKey: "about_page.manoel",
    linkedin: "https://www.linkedin.com/in/manoel-leonardo-carneiro-sette-serrano-a92b47210/",
    avatar: "https://avatars.githubusercontent.com/u/158238548?v=4",
  },
  {
    name: "Prof. Vinícius Amador",
    descriptionKey: "about_page.vinicius",
    linkedin: "https://www.linkedin.com/in/vin%C3%ADcius-costa-amador-684484241/",
    avatar: "https://avatars.githubusercontent.com/u/81780212?v=4",
  },
  {
    name: "Prof. Flávio Fonseca",
    descriptionKey: "about_page.flavio",
    linkedin: "https://www.linkedin.com/in/fl%C3%A1vio-fonseca-02ab9585/",
    avatar: "https://media.licdn.com/dms/image/D4D03AQFlr_Y7Y_iEkQ/profile-displayphoto-shrink_800_800/0/1712070798864?e=1723075200&v=beta&t=Y2rGN5ceBFuSmj6QpxStlazKUz0XM_MuZwMoyP7cnsg",
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        {t("about_page.title")}
      </Typography>

      <Typography variant="body1" paragraph>{t("about_page.story")}</Typography>
      <Typography variant="body1" paragraph>{t("about_page.impact")}</Typography>
      <Typography variant="body1" paragraph>{t("about_page.goal")}</Typography>

      <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
        📄 {t("about_page.read_article")}:
      </Typography>
      <Link
        href="https://drive.google.com/file/d/12dEBaoJ9afYAnngHYF7RgdgEA0czDYZW/view?usp=sharing"
        target="_blank"
        rel="noopener"
        color="secondary"
      >
        {t("about_page.article_link")}
      </Link>

      <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
        👥 {t("about_page.team")}
      </Typography>

      <Grid container spacing={3} direction="column">
        {teamMembers.map((member) => (
          <Grid item xs={12} key={member.name}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 86, height: 86 }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {member.name}
                  </Typography>
                  <Typography variant="body2">
                    {t(member.descriptionKey)}
                  </Typography>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener"
                    fontSize="0.85rem"
                  >
                    LinkedIn
                  </Link>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
