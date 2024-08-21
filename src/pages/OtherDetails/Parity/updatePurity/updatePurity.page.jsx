import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import UpdateForm from './updateForm'
import { Box } from '@mui/material'
import PurityCrumb from './updatebreadcrubs.page'
const Purity = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" >
      <Navbar/>
      <Box marginTop={1} marginLeft={2.5}><PurityCrumb/></Box>
     <UpdateForm/>
        </Box>
      </Box>
  )
}

export default Purity