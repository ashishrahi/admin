import Navbar from '../../../Components/Navbar/Navbar'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import { TextField, Container, Paper, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Button, Box } from '@mui/material';
import { useAddPolicyrMutation } from '../../../Services/fetchApi/fetchPrivacyPolicy/mutationPrivacypolicy.api';
import NewCrub from './policybreadcrubs.page';
import { useFormik } from 'formik';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles for react-quill

const New = () => {
  const { mutateAsync: addMutatePolicy } = useAddPolicyrMutation();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      policy: ''
    },
    onSubmit: async (values, { resetForm }) => {
      await addMutatePolicy(values);
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
                  value={formik.values.policy}
                  onChange={(value) => formik.setFieldValue('about', value)}
                  theme="snow"
                  style={{ width: '100%', height: '250px' }} 
                />
              </Box>
          <Box className='about-button' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>    
            <Button type='submit' variant='contained' endIcon={<SendIcon />}
                sx={{marginTop: '6%', width: '150px', padding: '10px', border: 'none',
                  cursor: 'pointer', alignItems: 'center',
                }}>
                Add Policy
              </Button></Box>
              </Paper>


          </form>
        </Container>
      </Box>
    </Box>
  );
}

export default New;
