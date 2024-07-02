import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import './list.scss'
import Datatable from './Datatable.page'
const GaugeSize = () => {
  return (
    <div className='list' style={{display:'flex'}}>
    <Sidebar />
    <div className="listContainer" style={{flex:'6'}}>
      <Navbar/>
     <Datatable/>
        </div>
      </div>
  )
}

export default GaugeSize