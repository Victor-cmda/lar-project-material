import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [carData, setCarData] = React.useState({
    nome: '',
    modelo: '',
    marca: '',
    placa: '',
    ano: '',
    sinistro: false
  });

  React.useEffect(() => {
    if (props.car) {
      setCarData(props.car);
      console.log(props.car)
    }
    else {
      setCarData({
        nome: '',
        modelo: '',
        marca: '',
        placa: '',
        ano: '',
        sinistro: false
      })
    }
  }, [props.car]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCarData({
      ...carData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onSave(carData)
    props.onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={props.onClose}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Carro Cadastrado
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              Salvar
            </Button>
          </Toolbar>
        </AppBar>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& > :not(style)': { m: 2, mt: 4, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            label="Nome"
            variant="standard"
            name="nome"
            value={carData.nome}
            onChange={handleInputChange}
          />
          <TextField
            required
            label="Modelo"
            variant="standard"
            name="modelo"
            value={carData.modelo}
            onChange={handleInputChange}
          />
          <TextField
            required
            label="Marca"
            variant="standard"
            name="marca"
            value={carData.marca}
            onChange={handleInputChange}
          />
          <TextField
            required
            label="Placa"
            variant="standard"
            name="placa"
            value={carData.placa}
            onChange={handleInputChange}
          />
          <TextField
            label="Ano"
            type="number"
            variant="standard"
            name="ano"
            value={carData.ano}
            onChange={handleInputChange}

          />
          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="sinistro"
                checked={carData.sinistro}
                onChange={handleInputChange}
              />
            }
            label="Sinistro"
          />
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
