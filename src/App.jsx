import Home from "./pages/Home/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Register from './pages/Auth/Register/Register'
import Login from './pages/Auth/Login/Login'

// Users
import Users from './pages/Users/UserDetails/Users'
import UserDetails from './pages/Users/UserDetails/UserDetails'
import NewUser from './pages/Users/NewUser/NewUser'
import {userInputs,karigarInputs,colorInputs,genderInputs,parityInputs,gaugeSizeInputs,
  dandiInputs,kundaInputs,sizeInputs,
  weightInputs,

} from './formSource'
import ForgetPassword from './pages/Users/ForgetPassword/forgetpassword'
import ResetPassword from './pages/Users/ResetPassword/resetpassword'

//Gender
import Gender from './pages/OtherDetails/Gender/GenderDetails/Gender.page'
import UpdateGender from './pages/OtherDetails/Gender/UpdateGender/UpdateGender.page'
import NewGender from './pages/OtherDetails/Gender/NewGender/NewGender.page'

//Parity
import Parity from './pages/OtherDetails/Parity/ParityDetails/Parity.page'
import UpdateParity from './pages/OtherDetails/Parity/UpdateParity/UpdateParity.page'
import NewParity from './pages/OtherDetails/Parity/NewParity/NewParity.page'

//Color
import Color from './pages/OtherDetails/Color/ColorDetails/Color.page'
import UpdateColor from './pages/OtherDetails/Color/UpdateColor/UpdateColor.page'
import NewColor from './pages/OtherDetails/Color/NewColor/NewColor.page'

//Dandi
import Dandi from './pages/OtherDetails/Dandi/DandiDetails/Dandi.page'
import UpdateDandi from './pages/OtherDetails/Dandi/UpdateDandi/UpdateDandi.page'
import NewDandi from './pages/OtherDetails/Dandi/NewDandi/NewDandi.page'

//Kunda
import Kunda from './pages/OtherDetails/Kunda/KundaDetails/Kunda.page'
import UpdateKunda from './pages/OtherDetails/Kunda/UpdateKunda/UpdateKunda.page'
import NewKunda from './pages/OtherDetails/Kunda/NewKunda/NewKunda.page'

//Size
import Size from './pages/OtherDetails/Size/SizeDetails/Size.page'
import UpdateSize from './pages/OtherDetails/Size/UpdateSize/UpdateSize.page'
import NewSize from './pages/OtherDetails/Size/NewSize/NewSize.page'

//Gauge Size
import GaugeSize from './pages/OtherDetails/GaugeSize/GaugeDetails/GaugeSize.page'
import UpdateGaugeSize from './pages/OtherDetails/GaugeSize/UpdateGaugeSize/UpdateGaugeSize.page'
import NewGaugeSize from './pages/OtherDetails/GaugeSize/GaugeSize/NewGaugeSize.page'

//Weight
import Weight from './pages/OtherDetails/Weight/WeightDetails/Weight.page'
import UpdateWeight from './pages/OtherDetails/Weight/UpdateWeight/UpdateWeight.page'
import NewWeight from './pages/OtherDetails/Weight/NewWeight/NewWeight.page'

//Description
import Description from './pages/OtherDetails/Description/DescriptionDetails/Description.page'
import UpdateDescription from './pages/OtherDetails/Description/UpdateDescription/UpdateDescription.page'
import NewDescription from './pages/OtherDetails/Description/NewDescription/NewDescription.page'

//Karigar
import Karigar from './pages/Karigar/KarigarDetails/Karigar.page'
import UpdateKarigar from './pages/Karigar/UpdateKarigar/UpdateKarigar.page'
import NewKarigar from './pages/Karigar/NewKarigar/NewKarigar.page'

//Vender
import Vender from './pages/Vender/VenderDetails/Vender.page'


import { useSelector } from "react-redux"
import './App.css'


const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)
  return (
    <div >
      <BrowserRouter>
        <Routes>

        {/* Auth Router */}
        <Route path="/">
        <Route index element={isAuthenticated?<Home/>:<Login/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>}/>
        <Route path="forgetpassword" element={<ForgetPassword/>} />
        <Route path="/resetpassword/:token" element={<ResetPassword/>} />

          {/* User Router */}
          <Route path="/User-List">
          <Route index element={isAuthenticated?<Users/>:<Login/>} />
          <Route path=":id" element={<UserDetails inputs={userInputs} title='View' />}  />
          <Route path="new" element={<NewUser inputs={userInputs} title='Add New User'/>}/>
          </Route>
          
          {/* OtherDetails Router */}
          <Route path="/Gender">
          <Route index element={isAuthenticated?<Gender/>:<Login/>} />
          <Route path=":id" element={<UpdateGender inputs={genderInputs} title='View' />}  />
          <Route path="new" element={<NewGender inputs={genderInputs} title='Add New Gender'/>}/>
          </Route>

          {/* Parity */}
          <Route path="/Parity">
          <Route index element={isAuthenticated?<Parity/>:<Login/>} />
          <Route path=":id" element={<UpdateParity inputs={parityInputs} title='View' />}/>
          <Route path="new" element={<NewParity inputs={parityInputs} title='Add New Parity'/>}/>
          </Route>

          {/* Color */}
          <Route path="/Color">
          <Route index element={isAuthenticated?<Color/>:<Login/>}/>
          <Route path=":id" element={<UpdateColor inputs={colorInputs} title='View' />}/>
          <Route path="new" element={<NewColor inputs={colorInputs} title='Add New Color'/>}/>
          </Route>

          {/* Dandi */}
          <Route path="/Dandi">
          <Route index element={isAuthenticated?<Dandi/>:<Login/>} />
          <Route path=":id" element={<UpdateDandi inputs={dandiInputs} title='View' />}/>
          <Route path="new" element={<NewDandi inputs={dandiInputs} title='Add New Dandi'/>}/>
          </Route>

          {/* Kunda */}
          <Route path="/Kunda">
          <Route index element={isAuthenticated?<Kunda/>:<Login/>} />
          <Route path=":id" element={<UpdateKunda inputs={kundaInputs} title='View' />}/>
          <Route path="new" element={<NewKunda inputs={kundaInputs} title='Add New Kunda'/>}/>
          </Route>

           {/* Size */}
           <Route path="/Size">
          <Route index element={isAuthenticated?<Size/>:<Login/>} />
          <Route path=":id" element={<UpdateSize inputs={sizeInputs} title='View' />}/>
          <Route path="new" element={<NewSize inputs={sizeInputs} title='Add New Kunda'/>}/>
          </Route>

          {/* GaugeSize */}
          <Route path="/GaugeSize">
          <Route index element={isAuthenticated?<GaugeSize/>:<Login/>} />
          <Route path=":id" element={<UpdateGaugeSize inputs={gaugeSizeInputs} title='View' />}/>
          <Route path="new" element={<NewGaugeSize inputs={gaugeSizeInputs} title='Add New GaugeSize'/>}/>
          </Route>

          {/* Weight */}
          <Route path="/Weight">
          <Route index element={isAuthenticated?<Weight/>:<Login/>} />
          <Route path=":id" element={<UpdateWeight inputs={userInputs} title='View' />}/>
          <Route path="new" element={<NewWeight inputs={weightInputs} title='Add New Weight'/>}/>
          </Route>

          {/* Description */}
          <Route path="/Description">
          <Route index element={isAuthenticated?<Description/>:<Login/>} />
          <Route path=":id" element={<UpdateDescription inputs={userInputs} title='View' />}/>
          <Route path="new" element={<NewDescription inputs={userInputs} title='Add New Description'/>}/>
          </Route>
             
              {/* Karigar */}
          <Route path="/Karigar-List">
          <Route index element={isAuthenticated?<Karigar/>:<Login/>} />
          <Route path=":id" element={<UpdateKarigar inputs={karigarInputs} title='View' />}/>
          <Route path="new" element={<NewKarigar inputs={karigarInputs} title='Add New Karigar-List'/>}/>
          </Route>

          {/* Vender */}
          <Route path="/Vender-List">
          <Route index element={isAuthenticated?<Vender/>:<Login/>} />
          </Route>


          {/* Error Page */}
          <Route path="*" element={() => <h1>Page not found</h1>} />
           


         

          
          
          
          
         
        
        
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App