import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import Datatable from '../WeightDetails/Datatable.page'
import BasicBreadcrumbs from './breadcrubs.page'
import { Box } from '@mui/material'
const Weight = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" >
      <Navbar/>
     <Box className='breadcrubs' marginTop={1} marginLeft={2.5}><BasicBreadcrumbs/></Box>

     <Datatable/>

        </Box>
      </Box>
  )
}

export default Weight