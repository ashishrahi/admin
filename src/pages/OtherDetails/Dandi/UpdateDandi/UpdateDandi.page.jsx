import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import UpdateForm from './updateForm'
import { Box } from '@mui/material'
import Updatebreadcrub from './updatebreadcrubs.page'
const Dandi = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer">
      <Navbar/>
     <Box className="breadcrub" marginLeft={2.5} marginTop={1}><Updatebreadcrub/></Box>
     <UpdateForm/>
        </Box>
      </Box>
  )
}

export default Dandi