import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListSubheader,
  Divider,
  Box,
  Button,
  Card,
  Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ViewCarousel as ViewCarouselIcon,
  Work as WorkIcon,
  AttachMoney as AttachMoneyIcon,
  Description as DescriptionIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  People as PeopleIcon,
  ArrowRightOutlined as ArrowRightOutlinedIcon,
  CategoryOutlined as CategoryOutlinedIcon,
  LocalMall as LocalMallIcon,
  Engineering as EngineeringIcon,
  Person as PersonIcon,
  Details as DetailsIcon,
  Policy as PolicyIcon,
  AdminPanelSettingsOutlined as AdminPanelSettingsOutlinedIcon,
  InfoOutlined as InfoOutlinedIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = (category) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [category]: !prevOpen[category],
    }));
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const iconColor = 'grey';
  const sidebarCategories = [
    {
      category: 'Admin',
      items: [
        {
          subcategoryname: 'Admin',
          subjectnames: ['admin'],
          icon: <AdminPanelSettingsIcon sx={{ color: iconColor }} />,
        },
      ],
    },
    {
      category: 'Users',
      items: [
        {
          subcategoryname: 'Users',
          subjectnames: ['User-List', 'Active-User', 'Inactive-User'],
          icon: <PeopleIcon sx={{ color: iconColor }} />,
        },
      ],
    },
    {
      category: 'Producers',
      items: [
       
        {
          subcategoryname: 'Venders',
          subjectnames: ['Vender-List'],
          icon: <PersonIcon sx={{ color: iconColor }} />,
        },
        {
          subcategoryname: 'Karigars',
          subjectnames: ['Karigar-List', 'Active-Karigar', 'Inactive-Karigar'],
          icon: <EngineeringIcon sx={{ color: iconColor }} />,
        },
      ],
    },
    {
      category: 'Products',
      items: [
        {
          subcategoryname: 'Categories',
          subjectnames: ['Category-List', 'Active-Category', 'Inactive-Category'],
          icon: <CategoryOutlinedIcon sx={{ color: iconColor }} />,
        },
        {
          subcategoryname: 'Variations',
          subjectnames: [
            'Gender',
            'Purity',
            'Color',
            'Dandi',
            'Kunda',
            'Size',
            'GaugeSize',
            'Weight',
            'Latkan',
          ],
          icon: <DescriptionIcon sx={{ color: iconColor }} />,
        },
        {
          subcategoryname: 'Products',
          subjectnames: ['Product-List'],
          icon: <DetailsIcon sx={{ color: iconColor }} />,
        },
      ],
    },
    {
      category: 'Payments',
      items: [
        {
          subcategoryname: 'Payment',
          subjectnames: ['Payment-List'],
          icon: <AttachMoneyIcon sx={{ color: iconColor }} />,
        },
      ],
    },
    {
      category: 'Orders',
      items: [
        {
          subcategoryname: 'Order',
          subjectnames: ['Order-List'],
          icon: <LocalMallIcon sx={{ color: iconColor }} />,
        },
      ],
    },
    {
      category: 'Other Details',
      items: [
        {
          subcategoryname: 'About',
          subjectnames: ['About'],
          icon: <InfoOutlinedIcon sx={{ color: iconColor }} />,
        },
        {
          subcategoryname: 'Home Banner',
          subjectnames: ['Home-Banner'],
          icon: <ViewCarouselIcon sx={{ color: iconColor }} />,
        },
        
        {
          subcategoryname: 'Privacy Policy',
          subjectnames: ['Privacy-Policy'],
          icon: <PolicyIcon sx={{ color: iconColor }} />,
        },
      ],
    },
  ];

  const DrawerList = (
    
    <List
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1px',
            fontWeight: 'bold',
            fontSize: '30px',
          }}
        >
          
        </ListSubheader>
      }
    ><Card>
      {sidebarCategories.map((category, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '.5px' }}>
          <ListSubheader component="div">
            <span style={{ fontWeight: 'bold' }}>{category.category}</span>
          </ListSubheader>
          {category.items.map((subject, subIndex) => (
            <Box key={subIndex} sx={{ display: 'flex', flexDirection: 'column', gap: '.005px', fontSize: '15px' }}>
              <ListItem
                sx={{ gap: '5px' }}
                button
                onClick={() => handleClick(subject.subcategoryname)}
                aria-controls={`${subject.subcategoryname}-list`}
                aria-expanded={open[subject.subcategoryname]}
              >
                {subject.icon}
                <ListItemText primary={subject.subcategoryname} />
                {open[subject.subcategoryname] ? (
                  <ExpandLess  />
                ) : (
                  <ExpandMore  />
                )}
              </ListItem>
              <Collapse in={open[subject.subcategoryname]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding id={`${subject.subcategoryname}-list`}>
                  {subject.subjectnames.map((subjectname, subSubIndex) => (
                    <ListItem
                      key={subSubIndex}
                      button
                      sx={{ pl: 1 }}
                      component={Link}
                      to={`/${subjectname.replace(/\s+/g, '-')}`}
                    >
                      <ArrowRightOutlinedIcon style={{ color: 'black' }} />
                      <ListItemText primary={subjectname} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              {/* {subIndex < category.items.length - 1 && <Divider  />} */}
            </Box>
          ))}
        </Box>
      ))} </Card>
    </List>
   
  );

  return (
    <Box>
      <Box sx={{display:'flex',flexDirection:'row',gap:'3px'}}>
          <Button onClick={toggleDrawer}>
            <MenuIcon />
          </Button>
            <Typography variant='h6' sx={{marginTop:'7px',color:'black',fontWeight:'bold'}}>Admin</Typography>
            </Box>
    <Drawer
      variant="permanent"
      open={drawerOpen}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '16%',
          boxSizing: 'border-box',
          color: 'grey',
          height: '82%',
          marginTop:'2%',
          marginRight:'20%',
          overflowX: 'hidden',
          
        },
      }}
    >
      {DrawerList}
    </Drawer>
    </Box>
  );
};

export default Sidebar;
