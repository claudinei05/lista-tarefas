import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";


import type { Metadata } from 'next';
import { Box, CssBaseline } from '@mui/material';

import './globals.css';

export const metadata: Metadata = {
  title: 'Lista de Tarefas',
  description: 'Aplicação de lista de tarefas desenvolvida por Claudinei',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <Box component="main" sx={{ flex: '1 0 auto', padding: '2rem' }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </body>
    </html>
  );
}