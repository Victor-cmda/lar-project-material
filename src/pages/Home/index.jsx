import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function Home() {
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: '12px',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
          padding: '20px'
        }}
      >
        <Typography variant="h2" gutterBottom>
          Bem-vindo ao Lar-Car
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
          Sua solução completa para gerenciamento de veículos
        </Typography>
        <Button href='car' variant="contained" color="primary" size="large">
          Conheça nossos Serviços
        </Button>
      </Box>
  );
}

export default Home;
