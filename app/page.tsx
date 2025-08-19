"use client";

import { Container, Typography, Button, Grid } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Título principal */}
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Bem-vindo à sua Lista de Tarefas
      </Typography>

      {/* Subtítulo */}
      <Typography variant="h6" align="center" color="text.secondary">
        Organize seu dia, aumente sua produtividade e nunca mais esqueça seus compromissos!
      </Typography>

      {/* Botões principais */}
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2, mb: 4 }}>
        <Grid item>
          <Button variant="contained" color="primary" href="/login">
            Entrar
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" href="/criar-conta">
            Criar Conta
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

