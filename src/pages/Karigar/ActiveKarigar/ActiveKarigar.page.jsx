import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import Activebreadcrubs from './activebreadcrubs.page'
const ActiveKarigar = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
     <Box marginLeft={2.5} marginTop={1}><Activebreadcrubs/></Box> 
     <Datatable/>
        </Box>
      </Box>
  )
}

export default ActiveKarigar