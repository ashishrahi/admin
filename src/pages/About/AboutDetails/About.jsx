import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Datatable from './Datatable'
import { Box } from '@mui/material'
import Aboutcrumb from './aboutbreadcrubs.page'

const About = () => {

  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
      <Box marginTop={1} marginLeft={2.5}><Aboutcrumb /></Box>
     <Datatable/>
        </Box>
      </Box>
  )
}

export default About