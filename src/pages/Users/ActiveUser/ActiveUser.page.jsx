import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import Activebreadcrumbs from './activeuserbreadcrubs.page'
const ActiveKarigar = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
    <Box sx={{marginLeft:'25px',marginTop:'20px'}}><Activebreadcrumbs/></Box>  
     <Datatable/>
        </Box>
      </Box>
  )
}

export default ActiveKarigar