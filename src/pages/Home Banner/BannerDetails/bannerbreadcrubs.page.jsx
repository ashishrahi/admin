import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import TableViewIcon from '@mui/icons-material/TableView';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={`/`}
          style={{ display: 'flex', alignItems: 'center',textDecoration:'none'}}
          
        >
          <HomeIcon sx={{ mr: 0.5 ,color:'black'}} fontSize="inherit" />
         <span style={{color:'black'}}>Dashboard</span> 
        </Link>
        <Link to={`/Home-Banner`}
          underline="none"
          style={{ display: 'flex', alignItems: 'center',textDecoration:'none' }}
        >
          <TableViewIcon sx={{ mr: 0.5,color:'blue' }} fontSize="inherit" />
          <span style={{color:'black'}}>HomeBanners</span> 
         
        </Link>
        {/* <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography> */}
      </Breadcrumbs>
    </div>
  );
}