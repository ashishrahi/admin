import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Select, MenuItem, Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const initialRows = [
  { id: 1, orderNumber: '12345', customerName: 'John Doe', orderDate: '2023-07-01', status: 'Shipped', total: 100.00 },
  { id: 2, orderNumber: '12346', customerName: 'Jane Smith', orderDate: '2023-07-02', status: 'Pending', total: 150.50 },
  { id: 3, orderNumber: '12347', customerName: 'Alice Johnson', orderDate: '2023-07-03', status: 'Delivered', total: 200.00 },
];

const statusOptions = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return 'orange';
    case 'Shipped':
      return 'blue';
    case 'Delivered':
      return 'green';
    case 'Cancelled':
      return 'red';
    default:
      return 'grey';
  }
};

const StatusEditCell = ({ id, value, api, field }) => {
  const handleChange = (event) => {
    api.setEditCellValue({ id, field, value: event.target.value });
    api.commitCellChange({ id, field });
    api.setCellMode(id, field, 'view');
  };

  return (
    <Select value={value} onChange={handleChange} autoFocus fullWidth>
      {statusOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

const columns = [
  { field: 'orderNumber', headerName: 'Order Number', width: 150, editable: true },
  { field: 'customerName', headerName: 'Customer Name', width: 150, editable: true },
  { field: 'orderDate', headerName: 'Order Date', width: 150, editable: true },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
    renderEditCell: (params) => <StatusEditCell {...params} />,
    renderCell: (params) => (
      <Chip label={params.value} style={{ backgroundColor: getStatusColor(params.value), color: 'white' }} />
    ),
  },
  { field: 'total', headerName: 'Total ($)', type: 'number', width: 130, editable: true },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <>
        <Button color="primary" onClick={() => handleEdit(params.id)}> <EditIcon/></Button>
        {/* <Button color="error" onClick={() => handleDelete(params.id)} style={{ marginLeft: '8px' }}>
          Delete
        </Button> */}
      </>
    ),
  },
];

const EditableOrderDataGrid = () => {
  const [rows, setRows] = useState(initialRows);
  const [editRowsModel, setEditRowsModel] = useState({});

  const handleEditRowsModelChange = (model) => {
    setEditRowsModel(model);
  };

  const handleProcessRowUpdate = (newRow) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === newRow.id ? newRow : row))
    );
    return newRow;
  };

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleEdit = (id) => {
    setEditRowsModel((prev) => ({
      ...prev,
      [id]: { status: { value: 'edit' } },
    }));
  };

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      orderNumber: '',
      customerName: '',
      orderDate: '',
      status: 'Pending',
      total: 0,
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Button onClick={handleAddRow} variant="contained" color="primary" style={{ marginBottom: '16px' }}>
        Add Order
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
        processRowUpdate={handleProcessRowUpdate}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default function App() {
  return (
    <Box sx={{ p: 2 }}>
      <EditableOrderDataGrid />
    </Box>
  );
}
