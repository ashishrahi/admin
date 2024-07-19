import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box } from '@mui/material';
const Widgets = ({type}) => {
 let data;

switch (type) {
    case 'user':
        data={
            title:'users',
            isMoney:false,
            link:'see all users',
            icon:<PersonOutlineIcon className='icon' sx={{fontSize:'10px',color:'crimson',}}/>
        };
        break;
        case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:'see all ORDERS',
                icon:<AddShoppingCartIcon className='icon'/>
            };
            break;

            case 'earning':
                data={
                    title:'ERARNING',
                    isMoney:true,
                    link:'View net earnings ',
                    icon:<MonetizationOnIcon className='icon'/>
                };
                break;
                case 'balance':
                    data={
                        title:'BALANCE',
                        isMoney:true,
                        link:'See details ',
                        icon:<MonetizationOnIcon className='icon'/>
                    };
                    break;

    default:
        break;
}


  return (
    <Box className="widget" sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
        p: 2,
        boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
        borderRadius: 2,
        height: 100,
      }}>
        <Box className="left" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
               }}>
            <span className='title' style={{fontWeight:'bold',fontSize:'14px',color:'gray'}}>{data.title}</span>
            <span className="counter" style={{fontSize:'18px',fontWeight:300}}>{data.isMoney && '$'}</span>
            <span className="link" style={{width:'max-content',fontSize:'28px',
                borderBottom:'1px solid gray'
            }}>{data.link}</span>
         </Box>
        <Box className="right" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
               }}>
            <Box className='percentage positive' sx={{display:'flex',alignItems:'center',fontSize:'10px'}}>
            <KeyboardArrowDownIcon style={{padding:'5px',backgroundColor:'rgba(128,0,128,0.541)',borderRadius:'5px'}}/>
                20%
                </Box>
                {data.icon}
        </Box>

    </Box>
  )
}

export default Widgets