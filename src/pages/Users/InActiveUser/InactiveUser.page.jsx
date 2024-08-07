import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import Inactivebreadcrumb from './inactiveuserbreadcrubs.page'
const Inactive = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
      <Box marginTop={1} marginLeft={2.5}><Inactivebreadcrumb/></Box>
     <Datatable/>
        </Box>
      </Box>
  )
}

export default Inactive