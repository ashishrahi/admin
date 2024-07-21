
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { brown } from '@mui/material/colors';
import {Box} from '@mui/material';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Viewcrub from './viewbreadcrubs.page'
const CategoryDetail = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        // Fetch the category details
        axios.get(`http://localhost:5400/api/categories/${id}`)
            .then(response => setCategory(response.data))
            .catch(error => console.error('Error fetching category details:', error));5


    }, [id]);

    if (!category) {
        return <Typography>Loading...</Typography>;
    }

    return (

<Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
     <Box marginTop={1} marginLeft={2.5}><Viewcrub/></Box> 
        <Container>
            <Typography variant="h4" marginTop={2} marginBottom={4} sx={{textAlign:'center'}} gutterBottom>
                Category Details
            </Typography>
            <Card>
                <CardContent>
                    <Box sx={{display:'flex',flexDirection:'row',gap:'20px',justifyContent:'space-evenly'}}>
                    <Box>
                    <Typography variant="h5">{category.categoryname}</Typography>
                    <Typography variant="body1">{category.status ? <Typography sx={{color:'green'}}>{'Active'}</Typography>  : <Typography sx={{color:'red'}}>{'InActive'}</Typography>}</Typography>
                    </Box>
                    
                    <img src={category.image} alt={category.categoryname} style={{ width: '100px', height: 'auto' }} />
                   
                    </Box>
                   <Typography marginTop={4} variant='h5' color={brown}>Variants Details:</Typography> 
                    <Grid container spacing={2} style={{ marginTop: '1rem' }}>
                        {Object.entries(category.variantdetails).map(([key, value]) => (
                            <Grid item xs={12} sm={6} key={key}>
                                <Typography variant="body1">
                                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Container>
        </Box>
        </Box>

    );
};

export default CategoryDetail;
