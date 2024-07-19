import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Close';
import { useColor, useAddColor,useDeleteColor,useStatusColor } from '../../../../Services/fetchApi/fetchVariantDetails/mutationColor.api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chip, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';

const initialRows = [
  
];

function EditToolbar({ setRows, setRowModesModel }) {
  const handleClick = () => {
    const newId = new Date().getTime().toString();
    setRows((oldRows) => [...oldRows, { id: newId, color: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [newId]: { mode: GridRowModes.Edit, fieldToFocus: 'color' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Link to='/Color/new'>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Color
      </Button>
      </Link>
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const { data } = useColor();
  const addColorMutation = useAddColor();
  const deleteColorMutation = useDeleteColor();
  const statusColorMutation = useStatusColor();

  useEffect(() => {
    if (data) {
      setRows(data.map(row => ({ id: row._id, color: row.color })));
    }
  }, [data]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => async () => {
    const rowToSave = rows.find((row) => row.id === id);

    if (!rowToSave.color) {
      console.error("Color is empty or undefined.");
      return;
    }

    if (rowToSave.isNew) {
      try {
        const newColor = await addColorMutation.mutateAsync({ color: rowToSave.color });
        setRows((prevRows) =>
          prevRows.map((row) =>
            row.id === id ? { ...row, isNew: false, id: newColor._id } : row
          )
        );
      } catch (error) {
        console.error("Failed to save color:", error);
      }
    } else {
      const updatedRow = { ...rowToSave, isNew: false };
      setRows(rows.map((row) => (row.id === id ? updatedRow : row)));
    }

    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    deleteColorMutation.mutateAsync(id)
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleCellEditCommit = (params) => {
    const updatedRow = { ...rows.find(row => row.id === params.id), color: params.value };
    setRows((prevRows) => prevRows.map(row => (row.id === params.id ? updatedRow : row)));
  };

//--------------- Toggle Status
const handleStatusToggle = async (id) => {
  console.log(id)
  try {
    const row = rows.find((row) => row._id === id);
    console.log(row)
    const updatedStatus = !row.status;
    statusColorMutation.mutateAsync(id)
     setRows((prevRows) =>
      prevRows.map((row) =>
        row._id === id ? { ...row, status: updatedStatus } : row
      )
    );
  } catch (error) {
    console.error('Error updating status', error);
  }
};

  const columns = [
    {
      field: 'color',
      headerName: 'Color',
      width: 180,
     
    },
    { field: 'status', headerName: 'Status', width: 180,
      renderCell: (params) => {
        return (
          <Box className={`cellWithStatus ${params.row.status}`}>
           
            {params.row.status ? (
        <Chip
          value={params.value}
          icon={<CheckCircleIcon style={{ color: 'green' }} />}
          label="Active"
          variant="outlined"
          onClick={() => handleStatusToggle(params.row._id)}

        />
      ) :  <Chip
           value={params.value}
          icon={<CancelIcon style={{ color: 'red' }} />}
          label="inActive"
          variant="outlined"
          onClick={() => handleStatusToggle(params.row._id)}

          />}
          </Box>
        );
      },
    },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id, row }) => {
        return [
          <Link to={`/Color/${row.id}`} key={`edit-${id}`}>
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={(event) => event.stopPropagation()} // Stop propagation to prevent row click
              color="inherit"
            />
          </Link>,
          // <GridActionsCellItem
          //   icon={<DeleteIcon />}
          //   label="Delete"
          //   onClick={() => handleDeleteClick(id)}
          //   color="inherit"
          //   key={`delete-${id}`}
          // />,
        ];
      },
    },
  ];

  return (
    <Container
      sx={{
        height: 500,
        marginLeft:'20px',
        marginTop:'20px',
        width: '97%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        onCellEditCommit={handleCellEditCommit}
        processRowUpdate={processRowUpdate}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Container>
  );
}
