import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
const Policy = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
     <Datatable/>
        </Box>
      </Box>
  )
}

export default Policy