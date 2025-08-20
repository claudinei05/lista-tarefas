"use client";

import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useState } from "react";

export default function CriarContaPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cSenha, setCSenha] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (!nome.trim() || !email.trim() || !senha.trim() || !cSenha.trim()) {
      setError("Preencha todos os campos.");
      return;
    }

    if (senha !== cSenha) {
      setError("As senhas não coincidem.");
      return;
    }
    const objetoCriarConta = {
      nome: nome,
      email: email,
      senha: senha,
      cSenha: cSenha,
    };
    // Recupera usuários já cadastrados ou cria um array vazio
    const usuariosSalvos = JSON.parse(
      localStorage.getItem("salvarUsuario") || "[]"
    );
    // Adiciona o novo usuário
    usuariosSalvos.push(objetoCriarConta);
    // Armazenando o objeto no localStorage
    localStorage.setItem("salvarUsuario", JSON.stringify(usuariosSalvos));

    setNome(""), setEmail(""), setSenha(""), setCSenha("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Criar Conta{nome}
          </Typography>
          {error && (
            <Typography
              variant="body2"
              color="error"
              align="center"
              gutterBottom
            >
              {error}
            </Typography>
          )}

          <Grid container spacing={2}>
            {/* Nome */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                variant="outlined"
              />
            </Grid>

            {/* E-mail */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
              />
            </Grid>

            {/* Senha */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                variant="outlined"
              />
            </Grid>

            {/* Confirmar Senha */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirmar Senha"
                type="password"
                value={cSenha}
                onChange={(e) => setCSenha(e.target.value)}
                variant="outlined"
              />
            </Grid>

            {/* Botão de cadastro */}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handleClick}
              >
                Criar Conta
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
