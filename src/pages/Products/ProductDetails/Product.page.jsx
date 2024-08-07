import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import ProductBreadcrubs from './productbreadcrubs.page'
const Category = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
     <Box sx={{marginLeft:'20px',marginTop:'15px'}}> <ProductBreadcrubs/> </Box>
     <Datatable/>
        </Box>
      </Box>
  )
}

export default Category