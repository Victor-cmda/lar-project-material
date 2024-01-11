import React, { useState, useEffect } from 'react';
import ReactVirtualizedTable from '../../components/ReactVirtualizedTable';
import FullScreenDialog from '../../components/FullScreenDialog';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CarDataService from '../../services/carService';
import FloatingActionButtons from '../../components/FloatingActionButtons';
import AlertDialog from '../../components/AlertDialog';

function Car() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [cars, setCars] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await CarDataService.getAll();
      setCars(response.data);
    } catch (error) {
      console.error('Erro ao buscar carros:', error);
    }
  };

  const handleEdit = async (carId) => {
    try {
      const response = await CarDataService.get(carId);
      setSelectedCar(response.data);
      setDialogOpen(true);
    } catch (error) {
      console.error('Erro ao buscar detalhes do carro:', error);
    }
  };

  const handleDelete = (carId) => {
    setCarToDelete(carId);
    setAlertOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedCar(null);
  };

  const handleAdd = () => {
    setSelectedCar(null);
    setDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (carToDelete) {
      try {
        await CarDataService.delete(carToDelete);
        fetchCars();
      } catch (error) {
        console.error('Erro ao deletar carro:', error);
      }
    }
    setAlertOpen(false);
    setCarToDelete(null);
  };

  const handleSaveEdit = async (carData) => {
    try {
      debugger;
      if (carData.id) {
        await CarDataService.update(carData.id, carData);
      } else {
        await CarDataService.create(carData);
      }
      fetchCars();
    } catch (error) {
      console.error('Erro ao salvar alterações do carro:', error);
    }
  };

  return (
    <Box p={4} sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Carros Disponíveis
      </Typography>
      <ReactVirtualizedTable cars={cars} onEdit={handleEdit} onDelete={handleDelete} />
      <FullScreenDialog
        car={selectedCar}
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSave={handleSaveEdit}
      />
      <AlertDialog
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        onConfirmDelete={handleConfirmDelete}
      />
      <div onClick={handleAdd}>
        <FloatingActionButtons />
      </div>
    </Box>
  );
}

export default Car;
