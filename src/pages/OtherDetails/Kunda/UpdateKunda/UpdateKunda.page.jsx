import Navbar from '../../../../Components/Navbar/Navbar'
import Sidebar from '../../../../Components/Sidebar/Sidebar'
import {TextField,Container, Paper} from '@mui/material';
import {Button,Box} from '@mui/material';
import { useState } from 'react';
import { useUpdateMutationKunda } from '../../../../Services/fetchApi/fetchVariantDetails/mutationKunda.api';
import { useParams } from 'react-router-dom';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import KundaBread from './updatebreadcrubs.page'

const Update = () => {

  const{mutateAsync:updateMutateKunda} = useUpdateMutationKunda();
  const[kunda,setKunda] = useState('')
  const { id } = useParams();
  
  const handleSubmit = async(e) => {
        e.preventDefault();
       await updateMutateKunda({id,kunda});
  };

  return (
    <Box className='new' style={{ display: 'flex' }}>
      <Sidebar />
      <Box className="newContainer" style={{ flex: '6' }}>
        <Navbar />
        <Box marginLeft={2.5} marginTop={1}><KundaBread/></Box>
        <Box sx={{display:'flex',flexDirection:'column',marginTop:'10px',marginLeft:'20%',width:'400px',height:'400px',alignItems:'center'}}>
        <form method='post' onSubmit={handleSubmit}>
          <Paper style={{display:'flex',backgroundColor:'white', flexDirection:'column',border:'2px,3px solid',alignItems:'center',marginTop:'50%',width:'300px',height:'80%'}}>
          <Box className="formInput" style={{ display: 'flex' ,flexDirection: 'column', gap: '10px' }}>
            
            <TextField
              label="Update Kunda"
              required
              autoFocus
              variant="outlined"
              value={kunda}
              
              name="KundaName"
              sx={{width:'200px',marginTop:'30%',size:'small',border:'5px 2px solid'}}
              onChange={(e)=>setKunda(e.target.value)}
            />
            
          </Box>
          <Button type='submit' variant='contained' size='small' color='primary' endIcon={<UpgradeIcon/>}
            sx={{
              marginTop: '30px', width: '150px', padding: '10px', border: 'none',
               cursor: 'pointer', alignItems: 'center',
            }}>
            Update Kunda
          </Button>
          </Paper>
        </form>
        </Box>
       </Box>
    </Box>
  );
}

export default Update;