import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import AddForm from './addForm'
import { Box } from '@mui/material'
import Addbreadcrubs from './addbreadcrubs.page'

const AddKarigar = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:4}}>
      <Navbar/>
     <Box marginLeft={4}><Addbreadcrubs/></Box> 
     <AddForm/>
        </Box>
      </Box>
  )
}

export default AddKarigar