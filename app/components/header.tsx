// src/components/Header.tsx
import { AppBar, Toolbar, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar sx={{ justifyContent: 'center', gap: '2rem' }}>
        <MuiLink
          component={Link}
          href="/"
          color="inherit"
          underline="hover"
          sx={{ fontSize: '1.1rem' }}
        >
          Home
        </MuiLink>
        <MuiLink
          component={Link}
          href="/login"
          color="inherit"
          underline="hover"
          sx={{ fontSize: '1.1rem' }}
        >
          Login
        </MuiLink>
        <MuiLink
          component={Link}
          href="/criar-conta"
          color="inherit"
          underline="hover"
          sx={{ fontSize: '1.1rem' }}
        >
          Criar Conta
        </MuiLink>
        <MuiLink
          component={Link}
          href="/tarefa"
          color="inherit"
          underline="hover"
          sx={{ fontSize: '1.1rem' }}
        >
          Tarefas
        </MuiLink>
      </Toolbar>
    </AppBar>
  );
}
