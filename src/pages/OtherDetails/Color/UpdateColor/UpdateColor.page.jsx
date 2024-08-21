import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import UpdateForm from './updateForm'
import { Box } from '@mui/material'
import Updatecrumb from './updatebreadcrubs.page'
const Kunda = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer">
      <Navbar/>
     <Box className='breadcrubs' marginTop={1} marginLeft={2.5}><Updatecrumb/></Box> 
     <UpdateForm/>
        </Box>
      </Box>
  )
}

export default Kunda