import Navbar from '../../../Components/Navbar/Navbar'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import {Button,Box} from '@mui/material';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addsubCategories } from '../../../Store/subcategorySlice';
import { useSelector } from 'react-redux';
import { fetchCategories } from '../../../Store/categorySlice';
import {Autocomplete} from '@mui/material';
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


const NewSubcategory = () => {

const dispatch = useDispatch()
const[file,setFile]=useState(null)
const[subcategoryname,setSubcategoryname] = useState({})
const[categoryname,setCategoryname] = useState({})
const options = useSelector(state=>state.categories.categories.map(category=>category.categoryname))

console.log(options)
console.log(categoryname)
console.log(subcategoryname);


useEffect(() => {
dispatch(fetchCategories())
}, [dispatch])

const handleSubmit = async(e) => {
   e.preventDefault();
   const formData = new FormData()
   formData.append('file',file)
   formData.append('subcategoryname',subcategoryname)
   formData.append('categoryname',categoryname)
   console.log(formData)
   dispatch(addsubCategories(formData))
  };

  return (
    <div className='new' style={{ display: 'flex' }}>
      <Sidebar />
      <div className="newContainer" style={{ flex: '6' }}>
        <Navbar />
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'30px'}}>
        <form method='post' onSubmit={handleSubmit}>
          <div style={{alignItems:'center'}}>
          <div className="formInput" style={{ display: 'flex' ,flexDirection: 'column', gap: '10px' }}>
            <Autocomplete
            options={options}
            onChange={(e, value) => {
              if (value !== null) {
                setCategoryname(value);
              }
            }}
            renderInput={(params)=><TextField{...params} label='Category Name'/>}
            />
             <div >
            <img src={file ? URL.createObjectURL(file):{Camera}} alt="" style={{width:'100px',height:'100px', borderRadius:'50%',objectFit:'cover'}} />
           </div>
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
         
              <TextField
              label="New Sub Category"
              variant="outlined"
              sx={{width:'200px'}}
              onChange={(e)=>setSubcategoryname(e.target.value)}

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

export default NewSubcategory;
