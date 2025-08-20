"use client";

import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    const usuariosSalvos = JSON.parse(
      localStorage.getItem("salvarUsuario") || "[]"
    );

    const verificarUserExiste = usuariosSalvos.find((e:any)=> e.email === email && e.senha === senha)

    if(verificarUserExiste){
     router.push("/tarefa")
    }else {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Login
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Grid container spacing={2}>
            {/* E-mail */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-mail"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            {/* Senha */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Senha"
                type="password"
                variant="outlined"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Grid>

            {/* Botão de login */}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handleLogin}
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
