import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Navbar from '../../../Components/Navbar/Navbar';
import {Box} from '@mui/material';
import ViewCrud from './viewbreadcrubs.page'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HomeIcon from '@mui/icons-material/Home';

const UserDetail = () => {
  const { id } = useParams(); // Assumes you're using React Router for routing
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5400/api/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error("There was an error fetching the user!", error));
  }, [id]);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>

    <Box marginTop={1} marginLeft={2.5}> <ViewCrud/></Box> 

    <Container style={{marginTop:'20px'}}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Avatar
                alt={user.username}
                src={user.avatar ? `http://localhost:5400/uploads/${user.avatar}` : 'avatar.png'}
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={14} sm={8} >
              <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <Typography variant="h4">{user.username}</Typography>
              <Typography variant="subtitle1" gap={1} sx={{display:'flex'}}><EmailIcon/>Email:{user.email}</Typography>
              <Typography variant="body1" gap={1} sx={{display:'flex'}}><PhoneAndroidIcon/>Phone: {user.phone}</Typography>
              <Typography variant="body1" gap={1} sx={{display:'flex'}}><AutorenewIcon/>Status: {user.status ? <Typography sx={{color:'green'}}>{'Active'}</Typography> : 'Inactive'}</Typography>
              <Typography variant="body1" gap={1} sx={{color:'brown',display:'flex'}}>
              <HomeIcon/> Address: {user.house}, {user.city}, {user.country}
              </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
    </Box>
    </Box>
  );
};

export default UserDetail;
