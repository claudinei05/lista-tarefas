"use client";

import { Container, Typography, TextField, Button, Card, CardContent, Grid } from "@mui/material";

export default function LoginPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Login
          </Typography>

          <Grid container spacing={2}>
            {/* E-mail */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-mail"
                type="email"
                variant="outlined"
              />
            </Grid>

            {/* Senha */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Senha"
                type="password"
                variant="outlined"
              />
            </Grid>

            {/* Botão de login */}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
              >
                Entrar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
