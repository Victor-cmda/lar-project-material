import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableVirtuoso } from 'react-virtuoso';
import CustomizedMenus from '../CustomizedMenus';

const columns = [
  {
    width: 120,
    label: 'Nome',
    dataKey: 'nome',
  },
  {
    width: 120,
    label: 'Modelo',
    dataKey: 'modelo',
  },
  {
    width: 120,
    label: 'Marca',
    dataKey: 'marca',
  },
  {
    width: 120,
    label: 'Placa',
    dataKey: 'placa',
  },
  {
    width: 120,
    label: 'Ano',
    dataKey: 'ano',
  },
  {
    width: 100,
    label: 'Ações',
    dataKey: 'actions',
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function rowContent(_index, row, onEdit, onDelete) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell key={column.dataKey} align={column.numeric || false ? 'right' : 'left'}>
          {column.dataKey === 'actions' ? (
            <CustomizedMenus carId={row.id}
              onEdit={() => onEdit(row.id)}
              onDelete={() => onDelete(row.id)} />
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

export default function ReactVirtualizedTable({ cars, onEdit, onDelete }) {
  return (
    <Paper style={{ height: 780, width: '100%' }}>
      <TableVirtuoso
        data={cars}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={(index, row) => rowContent(index, row, onEdit, onDelete)}
      />
    </Paper>
  );
}
