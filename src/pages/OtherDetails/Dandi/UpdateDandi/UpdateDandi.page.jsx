import Navbar from '../../../../Components/Navbar/Navbar';
import Sidebar from '../../../../Components/Sidebar/Sidebar';
import { TextField, Paper, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { useUpdatedandi, useDandiById } from '../../../../Services/fetchApi/fetchVariantDetails/mutationDandi.api';
import { useParams } from 'react-router-dom';
import UpdateCrud from './updatebreadcrubs.page';

const Update = () => {
  const { mutateAsync: updateMutateDandi } = useUpdatedandi();
  const [updatedandi, setUpdatedandi] = useState('');
  const { id } = useParams();
  const { data, error } = useDandiById(id);

  // Debugging log
  useEffect(() => {
    if (data?.dandi) {
      console.log('Data fetched:', data.dandi); // Log fetched data
      setUpdatedandi(data.dandi);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(updatedandi)
      await updateMutateDandi({ id, updatedandi });
      // Optionally handle successful update
    } catch (err) {
      // Handle error here
      console.error('Error updating dandi:', err);
    }
  };

  return (
    <Box className='new' sx={{ display: 'flex' }}>
      <Sidebar />
      <Box className="newContainer" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box marginTop={1} marginLeft={2.5}>
          <UpdateCrud />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '400px',
            height: '400px',
            alignItems: 'center'
          }}
        >
          <form onSubmit={handleSubmit}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                border: '2px solid',
                backgroundColor: 'white',
                height: '100%'
              }}
            >
              <Box className="formInput" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Update Dandi"
                  required
                  autoFocus
                  variant="outlined"
                  name="DandiName"
                  sx={{ width: '100%', marginTop: 2, size: 'small' }}
                  value={updatedandi}
                  onChange={(e) => setUpdatedandi(e.target.value)}
                />
              </Box>
              <Button
                type='submit'
                variant='contained'
                size='small'
                color='primary'
                endIcon={<AddIcon />}
                sx={{ marginTop: 2, width: '150px' }}
              >
                Update Dandi
              </Button>
            </Paper>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Update;
