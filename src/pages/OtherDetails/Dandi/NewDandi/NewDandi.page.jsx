import Navbar from '../../../../Components/Navbar/Navbar'
import Sidebar from '../../../../Components/Sidebar/Sidebar'
import {TextField,Container, Paper} from '@mui/material';
import {Button,Box} from '@mui/material';
import { useState } from 'react';
import { useAdddandis } from '../../../../Services/fetchApi/fetchVariantDetails/mutationDandi.api';
import AddIcon from '@mui/icons-material/Add';
import NewDandicrubm from './newdandicrubs.page'

const Add = () => {

  const{mutateAsync:addMutateDandi} = useAdddandis();
  const[dandi,setDandi] = useState('')
  
  const handleSubmit = async(e) => {
        e.preventDefault();
       await addMutateDandi({dandi});
  };

  return (
    <Box className='new' style={{ display: 'flex' }}>
      <Sidebar/>
      <Box className="newContainer" style={{ flex: '6' }}>
        <Navbar/>
       <Box marginLeft={2.5} marginTop={1}><NewDandicrubm/></Box>

        {/* Body */}
        <Container sx={{display:'flex',flexDirection:'column',marginLeft:'25%',width:'400px',height:'400px',alignItems:'center'}}>
        <form method='post' onSubmit={handleSubmit}>
          <Paper style={{display:'flex',backgroundColor:'white', flexDirection:'column',border:'2px,3px solid',alignItems:'center',marginTop:'50%',width:'300px',height:'80%'}}>
          <Box className="formInput" style={{ display: 'flex' ,flexDirection: 'column', gap: '10px' }}>
            
            <TextField
              label="Add Dandi"
              required
              autoFocus
              variant="outlined"
              value={dandi}
              
              name="DandiName"
              sx={{width:'200px',marginTop:'30%',size:'small',border:'5px 2px solid'}}
              onChange={(e)=>setDandi(e.target.value)}
            />
            
          </Box>
          <Button type='submit' variant='contained' size='small' color='primary' endIcon={<AddIcon/>}
            sx={{
              marginTop: '30px', width: '150px', padding: '10px', border: 'none',
               cursor: 'pointer', alignItems: 'center',
            }}>
            Add Dandi
          </Button>
          </Paper>
        </form>
        </Container>
       </Box>
    </Box>
  );
}

export default Add;