import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import UpdateForm from './updateForm'
import { Box } from '@mui/material'
import UpdateBreadcrumb from './updatebreadcrubs.page'
const Gender = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer">
      <Navbar/>
      <Box marginTop={1} marginLeft={2.5}><UpdateBreadcrumb/></Box>
     <UpdateForm/>
        </Box>
      </Box>
  )
}

export default Gender