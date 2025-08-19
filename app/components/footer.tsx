import { Box, Typography } from '@mui/material';
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: '1rem',
        backgroundColor: '#b63535ff',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Typography variant="body2" color="white">
        © {new Date().getFullYear()} - Lista de Tarefas | Desenvolvido por Claudinei
      </Typography>
    </Box>
  );
}
