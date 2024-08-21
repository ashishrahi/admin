import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import NewForm from './newForm'
import { Box } from '@mui/material'
import NewCrumb from './newbreadcrubs.page'
const Purity = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" >
      <Navbar/>
      <Box marginTop={1} marginLeft={2.5}><NewCrumb/></Box>
     <NewForm/>
        </Box>
      </Box>
  )
}

export default Purity