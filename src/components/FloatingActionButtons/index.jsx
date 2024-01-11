import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtons() {
  const fabStyle = {
    position: 'absolute',
    bottom: 64,
    right: 64,
  };
  return (
    <Box sx={fabStyle}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}