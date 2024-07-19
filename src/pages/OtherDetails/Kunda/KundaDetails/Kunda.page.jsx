import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import Kundacrumb from './Kundabreadcrubs.page'
const Kunda = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:2}}>
      <Navbar/>
     <Box className='breadcrubs' marginTop={1} marginLeft={2.5}><Kundacrumb/></Box> 
     <Datatable/>
        </Box>
      </Box>
  )
}

export default Kunda