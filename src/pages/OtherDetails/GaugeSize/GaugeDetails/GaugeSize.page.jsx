import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import Gaugesizecrumb from './gaugesizebreadcrubs.page'
const GaugeSize = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer">
      <Navbar/>
     <Box className='breadcrumb' marginLeft={3} marginTop={2}><Gaugesizecrumb/></Box> 
     <Datatable/>
        </Box>
      </Box>
  )
}

export default GaugeSize