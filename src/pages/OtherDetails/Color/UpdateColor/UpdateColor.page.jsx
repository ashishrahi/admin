import Navbar from '../../../../Components/Navbar/Navbar'
import Sidebar from '../../../../Components/Sidebar/Sidebar'
import {TextField,Container, Paper} from '@mui/material';
import {Button,Box} from '@mui/material';
import { useState } from 'react';
import { useUpdateColor } from '../../../../Services/fetchApi/fetchVariantDetails/mutationColor.api';
import { useParams } from 'react-router-dom';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import UpdateBreadcrumb from './updatebreadcrubs.page'

const Update = () => {

  const{mutateAsync:updateMutateColor} = useUpdateColor();
  const[color,setColor] = useState('')
  const { id } = useParams();
  
  const handleSubmit = async(e) => {
        e.preventDefault();
       await updateMutateColor({id,color});
  };

  return (
      <Box className='new' sx={{ display:'flex'}}>
      <Sidebar/>
      <Box className="newContainer" sx={{ flex:6 }}>
      <Navbar/>
      <Box marginTop={1} marginLeft={2.5}><UpdateBreadcrumb/></Box>  
      {/*Main Body*/}

        <Box sx={{
        height: 500,
        marginLeft:'20%',
        marginTop:'20px',
        width: '97%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}>
        <form method='post' onSubmit={handleSubmit}>
          <Paper style={{display:'flex',backgroundColor:'white', flexDirection:'column',border:'3px ',alignItems:'center',marginTop:'15%',width:'300px',height:'80%'}}>
          <Box className="formInput" sx={{ display: 'flex' ,flexDirection: 'column', gap: '10px' }}>
            
            <TextField
              label="Update Color"
              required
              autoFocus
              variant="outlined"
              value={color}
              
              name="ColorName"
              sx={{width:'200px',marginTop:'30%',size:'small',border:'5px 2px solid'}}
              onChange={(e)=>setColor(e.target.value)}
            />
            
          </Box>
          <Button type='submit' variant='contained' size='small' color='primary' endIcon={<UpgradeIcon/>}
            sx={{
              marginTop: '30px', width: '150px', padding: '10px', border: 'none',
               cursor: 'pointer', alignItems: 'center',
            }}>
            Update Color
          </Button>
          </Paper>
        </form>
        </Box>
       </Box>
    </Box>
  );
}

export default Update;