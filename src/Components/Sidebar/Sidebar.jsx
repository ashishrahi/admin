import { Drawer, List, ListItem, ListItemText, Collapse, ListSubheader, Divider } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SubjectIcon from '@mui/icons-material/Subject';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GridViewIcon from '@mui/icons-material/GridView';
import DiamondIcon from '@mui/icons-material/Diamond';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import GroupIcon from '@mui/icons-material/Group';
import PeopleIcon from '@mui/icons-material/People';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonIcon from '@mui/icons-material/Person';



const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [subjectSubcategory,setSubjectSubcategory] = useState([])

  const handleToggle = () => {
    setOpen(!open);
  };
  console.log(subjectSubcategory.subcategoryId)
  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    axios.get('http://localhost:5100/api/subject/${id}/subjectwithsubcategory').then(res=>{
      setSubjectSubcategory(res.data)
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])

   const handleClick = (category) => {
    setOpen(prevOpen => ({
      ...prevOpen,
      [category]: !prevOpen[category]
    }));
  };


  const Sidebar =[{
    subcategoryname: 'Admin',
    subjectnames: ['admin'],
    icon:<AdminPanelSettingsIcon/>
    
  },{
    subcategoryname: 'Users',
    subjectnames: ['User List', 'Active', 'Inactive'],
    icon:<PeopleIcon/>
  },
  {
    subcategoryname: 'Vender',
    subjectnames: ['Vender List', 'Active', 'Inactive'],
    icon:<PersonIcon/>
  },
  {
    subcategoryname: 'Karigar',
    subjectnames: ['Karigar List', 'Active', 'Inactive'],
    icon:<EngineeringIcon/>
  },
  {
    subcategoryname: 'Category',
    subjectnames: ['All', 'Active', 'Inactive'],
    icon:<CategoryOutlinedIcon/>
  },
  {
    subcategoryname: 'Other Details',
    subjectnames: ['Gender', 'Parity', 'Color','Dandi','Kunda','Size','GaugeSize','Weight','Description','Latkan'],
    icon:<CategoryOutlinedIcon/>
  },
  {
    subcategoryname: 'Order',
    subjectnames: ['All', 'Pending', 'Rejected','Cancel'],
    icon:<LocalMallIcon/>
  }
]


  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" style={{gap:'10px',marginBottom:'30px',fontWeight:'bold',fontSize:'30px'}}>
            <DiamondIcon style={{height:'50%',color:'red'}}/>
           <span>Admin</span> 
          </ListSubheader>
        }
      >  
      
        {Sidebar.map((subject, index) => (
          <div key={index}>
            <ListItem button onClick={() => handleClick(subject.subcategoryname)}>
              {subject.icon}
              <ListItemText primary={subject.subcategoryname} />
              {open[subject.subjectnames] ? <ExpandLess /> : <ExpandMore />}

            </ListItem>
             <Divider/>
             <Collapse in={open[subject.subcategoryname]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {subject.subjectnames.map((subjectname, subIndex) => (
                  <ListItem 
                    key={subIndex} 
                    button 
                    sx={{ pl: 4 }} 
                    component={Link} 
                    to={`/${subjectname.replace(/\s+/g, '-')}`}
                  >
                   <ArrowRightOutlinedIcon/> <ListItemText primary={subjectname} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            {index < subjectSubcategory.length - 1 && <Divider sx={{backgroundColor:'green'}}/>}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
