import Navbar from '../../../Components/Navbar/Navbar'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import {Button,Box} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addedCategories } from '../../../Store/categorySlice';
import Camera from '../../../Components/assets/camera.jpg'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; 
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const New = () => {
const dispatch = useDispatch()
const[file,setFile]= useState(null)
const[categoryname,setCategoryname] = useState()
console.log(categoryname);
console.log(file);



  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',file)
    formData.append('categoryname',JSON.stringify(categoryname))
   dispatch(addedCategories(formData))
  };

  return (
    <div className='new' style={{ display: 'flex' }}>
      <Sidebar />
      <div className="newContainer" style={{ flex: '6' }}>
        <Navbar />
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'30px',gap:'20px',justifyItems:'center'}}>
        <div >
        <img src={file ? URL.createObjectURL(file):{Camera}} alt="" style={{width:'100px',height:'100px', borderRadius:'50%',objectFit:'cover'}} />
       </div>
        
        <form method='post' onSubmit={handleSubmit}>
        <div style={{alignItems:'center',gap:'30px'}}>
          <Box sx={{marginBottom:'20px'}}>
          <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{backgroundColor:'teal'}}
    >
      Upload file
      <VisuallyHiddenInput type="file" onChange={(e)=>setFile(e.target.files[0])} />
    </Button>
    </Box>
          <div className="formInput" style={{ display: 'flex' ,flexDirection: 'column', gap: '10px' }}>
            
            
            <TextField
            label="NewCategory"
              variant="outlined"
              name="categoryName"
              sx={{width:'200px'}}
              type='text'
              onChange={(e)=>setCategoryname(e.target.value)}
            />
            
          </div>
          <Button type='submit'  endIcon={<SendIcon/>}
            sx={{
              marginTop: '10px', width: '150px', padding: '10px', border: 'none',
               cursor: 'pointer', alignItems: 'center',
            }}>
            Add
          </Button>
          </div>
        </form>
        </Box>
      </div>
    </div>
  );
}

export default New;
