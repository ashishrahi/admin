import Navbar from '../../../Components/Navbar/Navbar'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import { TextField, Container, Paper, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Button, Box } from '@mui/material';
import { useAddAbout } from '../../../Services/fetchApi/fetchAbout/mutationAbout.api';
import NewCrub from './newbreadcrubs.page';
import { useFormik } from 'formik';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles for react-quill

const New = () => {
  const { mutateAsync: addMutateAbout } = useAddAbout();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      about: ''
    },
    onSubmit: async (values, { resetForm }) => {
      await addMutateAbout(values);
      resetForm();
    },
  });

  return (
    <Box className='new' style={{ display: 'flex' }}>
      <Sidebar />
      <Box className="newContainer" style={{ flex: '6' }}>
        <Navbar />
        {/* breadcrubs */}
        <Box marginTop={1} marginLeft={2.5}><NewCrub/></Box>
        {/* Body */}
        <Container sx={{ marginTop: '30px', 'border-color': 'solid' }}>
          <form method='post' onSubmit={formik.handleSubmit}>
            <Paper style={{ alignItems: 'center', width: '1100px', height: 'auto', padding: '20px' }}>
              <Box className="formInput" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <TextField
                  label="Title"
                  required
                  variant="outlined"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  sx={{ width: '100%' }}
                />
                <TextField
                  label="Description"
                  required
                  variant="outlined"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  sx={{ width: '100%' }}
                />
                <ReactQuill
                  value={formik.values.about}
                  onChange={(value) => formik.setFieldValue('about', value)}
                  theme="snow"
                  style={{ width: '100%', height: '250px' }} 
                />
              </Box>
          <Box className='about-button' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>    
            <Button type='submit' variant='contained' endIcon={<SendIcon />}
                sx={{marginTop: '7%', width: '150px', padding: '10px', border: 'none',
                  cursor: 'pointer', alignItems: 'center',
                }}>
                Add About
              </Button></Box>
              </Paper>


          </form>
        </Container>
      </Box>
    </Box>
  );
}

export default New;
