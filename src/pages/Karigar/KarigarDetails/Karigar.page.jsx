import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import Karigarbreadcrubs from './karigarbreadcrubs.page'
const Karigar = () => {
  return (
    <Box className='list' style={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" style={{flex:'6'}}>
      <Navbar/>
     <Box marginLeft={2.5} marginTop={1}> <Karigarbreadcrubs/></Box>
     <Datatable/>
        </Box>
      </Box>
  )}

export default Karigar