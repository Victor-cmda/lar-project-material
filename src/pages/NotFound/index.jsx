import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useNavigate  } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h3" gutterBottom>
        404 - Página Não Encontrada
      </Typography>
      <Typography variant="subtitle1">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </Typography>
      <Button 
        variant="outlined" 
        color="primary" 
        style={{ marginTop: '20px' }}
        onClick={goBack}
      >
        Voltar
      </Button>
    </Container>
  );
};

export default NotFoundPage;
