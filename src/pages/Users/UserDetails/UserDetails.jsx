import './single.scss'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Chart from '../../../Components/Chart/Chart'
import Table from '../../../Components/Table/Table'
import {Stack,Box} from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import api from '../../../fetchApi/fetchApi'

const UserDetails = () => {

  const [user,setUser]=useState({})
  const {id} = useParams()
  console.log(id)
  console.log(user)


  useEffect(() => {
    fetchUser(id);
  },[])
    const fetchUser = async (id) => {
    const response = await api.get(`http://localhost:5100/api/users/${id}`);
    setUser(response.data);
    console.log(response);
  }

  return (
    <Stack className='single' style={{display:'flex',flexDirection:'row'}}>
      <Sidebar/>
      <Box className="singleContainer" style={{flex:'6'}}>
        <Navbar/>
          <Box className="top"> 
          <Box className="left">
           <Link to={`/${id}`}> <Box className="editButton">Edit</Box></Link>
            <h1 className="title">Information</h1>
            <Box className="item">
              <img  src={user.avatar}   className='itemImg'/>
              <Box className="details">
                <h1 className='itemTitle'>{user.username}</h1>
                <Box className="detailItem">
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>{user.email}</span>
                </Box>
                <Box className="detailItem">
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>{user.phone}</span>
                </Box>
                <Box className="detailItem">
                  <span className='itemKey'>City:</span>
                  <span className='itemValue'>{user.city}</span>
                </Box>
                <Box className="detailItem">
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>{user.country}</span>
                </Box>
                </Box>
            </Box>
          </Box>
          <Box className="right">
          <Chart aspect={3/1} title='User Spending (Last 6 Months)'/>
          </Box>
          </Box>
          <Box className="bottom">
            <Table/>
          </Box>
      </Box>
      </Stack>
  )
}

export default UserDetails