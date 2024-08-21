import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import NewForm from './newForm'
import { Box } from '@mui/material'
import WeightBreadcrumb from './weightbreadcrubs.page'
const Gender = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer">
      <Navbar/>
      <Box marginTop={1} marginLeft={2.5}><WeightBreadcrumb/></Box>
     <NewForm/>
        </Box>
      </Box>
  )
}

export default Gender