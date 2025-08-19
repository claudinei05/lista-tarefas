"use client";

import { Container, Typography, TextField, Button, Card, CardContent, Grid } from "@mui/material";
import { log } from "console";
import { useState } from "react";


export default function CriarContaPage() {
  const [nome, setNome] =useState('')
  const [email, setEmail] =useState('')
  const [senha, setSenha] =useState('')
  const [cSenha, setCSenha] =useState('')
 

  
  
  const handleClick = ()=>{
    if(nome.trim() && email.trim() && senha.trim() && cSenha.trim()){

      const salvarObjeto ={
        nome : nome,
        email: email,
        senha: senha,
      }
      console.log(salvarObjeto);
      
      setNome(''),
      setEmail(''),
      setSenha(''),
      setCSenha('')
    }
  }


  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Criar Conta{nome}
          </Typography>

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
