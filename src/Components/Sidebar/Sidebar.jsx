import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListSubheader,
  Divider,
  Box,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Description as DescriptionIcon ,
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
} from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState({});

  const handleClick = (category) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [category]: !prevOpen[category],
    }));
  };

  const iconColor = 'red';
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
          subjectnames: ['User_List', 'Active_User', 'Inactive_User'],
          icon: <PeopleIcon sx={{ color: iconColor }} />,
        },
      
      ],
    },

    {
      category: 'Producer',
      items: [
        {
          subcategoryname: 'Vendor',
          subjectnames: ['Vendor_List'],
          icon: <PersonIcon sx={{ color: iconColor }} />,
        },
        {
          subcategoryname: 'Karigar',
          subjectnames: ['Karigar_List', 'Active_Karigar', 'Inactive_Karigar'],
          icon: <EngineeringIcon sx={{ color: iconColor }} />,
        },
      ],
    },{
      category: 'Product',
      items: [
        {
          subcategoryname: 'Category',
          subjectnames: ['Category List', 'Active Category', 'Inactive Category'],
          icon: <CategoryOutlinedIcon sx={{ color: iconColor }} />,
        },
        {
          subcategoryname: 'Variations',
          subjectnames: ['Gender', 'Purity', 'Color', 'Dandi', 'Kunda', 'Size', 'GaugeSize', 'Weight', 'Latkan'],
          icon: <DescriptionIcon sx={{ color: iconColor }} />,
        },
        {
          subcategoryname: 'Products',
          subjectnames: ['products'],
          icon: <DetailsIcon sx={{ color: iconColor }} />,
        },
],
    },
    {
      category: 'Purchase',
      items: [
        {
          subcategoryname: 'Order',
          subjectnames: ['All Order'],
          icon: <LocalMallIcon sx={{ color: iconColor }} />,
        },],
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
          subcategoryname: 'Privacy Policy',
          subjectnames: ['Privacy Policy'],
          icon: <PolicyIcon sx={{ color: iconColor }} />,
        },
        
      ],
    },
];
return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '16%',
          boxSizing: 'border-box',
          color: '#3C3B3F',
          height: '92%',
        },
      }}
    >
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
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <span>Admin</span>
            </Link>
            <AdminPanelSettingsOutlinedIcon
              style={{ width: '10%', height: '100%', marginTop: '20px' }}
            />
          </ListSubheader>
        }
      >
        <Divider />
        {sidebarCategories.map((category, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <ListSubheader component="div">{<span style={{fontWeight:'bold'}}>{category.category}</span>}</ListSubheader>
            {category.items.map((subject, subIndex) => (
              <Box key={subIndex} sx={{ display: 'flex', flexDirection: 'column', gap: '1px',fontSize:'15px'}}>
                <ListItem
                  sx={{ gap: '1px' }}
                  button
                  onClick={() => handleClick(subject.subcategoryname)}
                  aria-controls={`${subject.subcategoryname}-list`}
                  aria-expanded={open[subject.subcategoryname]}
                >
                  {subject.icon}
                  <ListItemText primary={subject.subcategoryname} />
                  {open[subject.subcategoryname] ? (
                    <ExpandLess sx={{ color: iconColor }} />
                  ) : (
                    <ExpandMore sx={{ color: iconColor }} />
                  )}
                </ListItem>
                <Divider />
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
                        <ArrowRightOutlinedIcon style={{ color: 'green' }} />
                        <ListItemText primary={subjectname} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
                {subIndex < category.items.length - 1 && <Divider sx={{ backgroundColor: 'green' }} />}
              </Box>
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
