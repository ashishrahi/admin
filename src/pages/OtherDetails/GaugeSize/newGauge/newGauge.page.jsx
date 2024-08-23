import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import NewForm from './newForm'
import { Box } from '@mui/material'
import Newbreadcrumbs from './newbreadcrubs.page'
const ActiveKarigar = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" >
      <Navbar/>
    <Box sx={{marginLeft:'25px',marginTop:'20px'}}><Newbreadcrumbs/></Box>  
     <NewForm/>
        </Box>
      </Box>
  )
}

export default ActiveKarigar