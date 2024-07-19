import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import Colorbreadcrubs from './colorbreadcrubs.page'
const Color = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:6}}>
      <Navbar/>
    <Box className='breadcrub' marginTop={1} marginLeft={2.5}><Colorbreadcrubs/></Box>  
     <Datatable/>
        </Box>
      </Box>
  )
}

export default Color