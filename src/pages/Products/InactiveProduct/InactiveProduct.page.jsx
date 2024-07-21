import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import Inactivebreadcrubs from '../InactiveCategory/inactivecategorybreadcrubs.page'
import { Box } from '@mui/material'
const InactiveCategory = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
     <Box sx={{marginLeft:'20px',marginTop:'15px'}}><Inactivebreadcrubs/></Box>
     <Datatable/>
        </Box>
      </Box>
  )
}
export default InactiveCategory