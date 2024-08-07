import Home from "./pages/Home/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Box } from "@mui/material"


import Login from './pages/Auth/Login/Login'

//-------------------Users

import Users from './pages/Users/UserDetails/Users'
import ActiveUser from "./pages/Users/ActiveUser/ActiveUser.page"
import InactiveUser from "./pages/Users/InActiveUser/InactiveUser.page"
import ViewUser from './pages/Users/ViewUser/ViewUser.page.jsx'

//-------------------Category
import Category from './pages/Category/CategoryDetails/Category.page'
import ActiveCategory from './pages/Category/ActiveCategory/ActiveCategory.page'
import InActiveCategory from './pages/Category/InactiveCategory/InactiveCategory.page'
import NewCategory from './pages/Category/newCategory/newCategory.page.jsx'
import UpdateCategory from './pages/Category/updateCategory/update.page'
import ViewCategory from './pages/Category/ViewCategory/viewCategory.page.jsx'



//-------------------Gender
import Gender from './pages/OtherDetails/Gender/GenderDetails/Gender.page'
import NewGender from './pages/OtherDetails/Gender/newGender/newGender.page'
import UpdateGender from './pages/OtherDetails/Gender/updateGender/updateGender.page'


// ------------ Product
 

//-------------------About


//---------------------Parity
import Purity from './pages/OtherDetails/Parity/ParityDetails/Purity.page'
import NewPurity from './pages/OtherDetails/Parity/newPurity/newPurity.page'
import UpdatePurity from './pages/OtherDetails/Parity/updatePurity/updatePurity.page'

//----------------------Color
import Color from './pages/OtherDetails/Color/ColorDetails/Color.page'
import NewColor from './pages/OtherDetails/Color/newColor/newColor.page'
import UpdateColor from './pages/OtherDetails/Color/updateColor/updateColor.page'

//----------------------Dandi
import Dandi from './pages/OtherDetails/Dandi/DandiDetails/Dandi.page'
import NewDandi from './pages/OtherDetails/Dandi/newDandi/newDandi.page'
import UpdateDandi from './pages/OtherDetails/Dandi/updateDandi/updateDandi.page'

//----------------------Kunda
import Kunda from './pages/OtherDetails/Kunda/KundaDetails/Kunda.page'
import NewKunda from './pages/OtherDetails/Kunda/newKunda/newKunda.page'
import UpdateKunda from './pages/OtherDetails/Kunda/updateKunda/updateKunda.page'

//----------------------Size
import Size from './pages/OtherDetails/Size/SizeDetails/Size.page'
import NewSize from './pages/OtherDetails/Size/newSize/newSize.page'
import UpdateSize from './pages/OtherDetails/Size/updateSize/updateSize.page'

//---------------------Gauge Size
import GaugeSize from './pages/OtherDetails/GaugeSize/GaugeDetails/GaugeSize.page'
import NewGaugeSize from './pages/OtherDetails/GaugeSize/newGauge/newGaugeSize.page'
import UpdateGaugeSize from './pages/OtherDetails/GaugeSize/updateGauge/updateGaugeSize.page'

//-----------------------Weight
import Weight from './pages/OtherDetails/Weight/WeightDetails/Weight.page'
import NewWeight from './pages/OtherDetails/Weight/newWeight/newWeight.page'
import UpdateWeight from './pages/OtherDetails/Weight/updateWeight/updateWeight.page'

//-------------------------Karigar
import Karigar from './pages/Karigar/KarigarDetails/Karigar.page'
import ActiveKarigar from './pages/Karigar/ActiveKarigar/ActiveKarigar.page'
import InactiveKarigar from './pages/Karigar/InactiveKarigar/InactiveKarigar.page'
import NewKarigar from './pages/Karigar/addKarigar/addKarigar.page'
import ViewKarigar from './pages/Karigar/ViewKarigar/viewKarigar.page.jsx'
import UpdateKarigar from './pages/Karigar/updateKarigar/update.page'

//---------------------------Vender
import Vender from './pages/Vender/VenderDetails/Vender.page'
import NewVender from './pages/Vender/addVender/addVender.page.jsx'
import ViewVender from './pages/Vender/ViewVender/viewVender.page.jsx'
import UpdateVender from  './pages/Vender/updateVender/update.page'

// ------------------------- Product
 import Product from './pages/Products/ProductDetails/Product.page.jsx'
 import NewProduct from './pages/Products/newProduct/newProduct.page.jsx'
 import ViewProduct from './pages/Products/viewProduct/viewProduct.page.jsx'
 import UpdateProduct from './pages/Products/updateProduct/updateProduct.page.jsx'

 //---------------------------Cart


//---------------------------Order
import Order from './pages/Orders/OrderDetails/Order.page'
import OrderView from './pages/Orders/viewOrder/view.page'

//---------------------------About
 import About from './pages/About/AboutDetails/About'
 import NewAbout from './pages/About/newAbout/newAbout.page'
 import UpdateAbout from './pages/About/updateAbout/updateAbout.page'
 import ViewDetails from './pages/About/viewAbout/view.page'

 //---------------------HomeBanner
 import HomeBanner from './pages/Home Banner/BannerDetails/Banner.page.jsx'  
 import NewBanner from './pages/Home Banner/newBanner/newBanner.page'
 import UpdateBanner from './pages/Home Banner/updateBanner/update.page.jsx'

 //---------------------------Private Policy
 import PrivacyPolicy from './pages/PrivacyPolicy/policyDetails/Policy.page'
 import NewPolicy from './pages/PrivacyPolicy/newPolicy/newPolicy.page'
 import UpdatePolicy from './pages/PrivacyPolicy/updatePolicy/updatePolicy.page'
 import ViewPolicy from './pages/PrivacyPolicy/viewPolicy/view.page.jsx'

import { useSelector } from "react-redux"
import './App.css'


const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)
  return (
    <Box sx={{color:'silver'}}>
      <BrowserRouter>
        <Routes>

        {/* Auth Router */}
        <Route path="/">
        <Route path='/' element={isAuthenticated?<Home/>:<Login/>}/>
        <Route path="login" element={<Login/>} />

          {/* User-List Router */}
          <Route path="/User-List">
          <Route index element={isAuthenticated?<Users/>:<Login/>} />
          <Route path=":id" element={isAuthenticated?<ViewUser/>:<Login/>}/>
          </Route>

          
          {/* Active User Router */}
          <Route path="/Active-User">
          <Route index element={isAuthenticated?<ActiveUser/>:<Login/>} />
          </Route>
          
          {/* InActive User Router */}
           
          <Route path="/Inactive-User">
          <Route index element={isAuthenticated?<InactiveUser/>:<Login/>} />
          </Route>

        {/* Category Router */}
           <Route path="/Category-List">
           <Route index element={isAuthenticated?<Category/>:<Login/>} />
          <Route path="new" element={isAuthenticated?<NewCategory/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<ViewCategory/>:<Login/>}/>
          <Route path=":id/update" element={isAuthenticated?<UpdateCategory/>:<Login/>}/>
         
          </Route>

        {/* Active Category Router */}
           <Route path="/Active-Category">
           <Route index element={isAuthenticated?<ActiveCategory/>:<Login/>} />
           </Route>
           {/* InActive Category Router */}
           <Route path="/Inactive-Category">
           <Route index element={isAuthenticated?<InActiveCategory/>:<Login/>} />
           </Route>
          
          {/*---------- OtherDetails Router */}

          <Route path="/Gender">
          <Route index element={isAuthenticated?<Gender/>:<Login/>} />
          <Route path="new" element={isAuthenticated?<NewGender/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<UpdateGender/>:<Login/>}/>

          </Route>

          {/* Parity */}
          <Route path="/Purity">
          <Route index element={isAuthenticated?<Purity/>:<Login/>} />
          <Route path="new" element={isAuthenticated?<NewPurity/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<UpdatePurity/>:<Login/>}/>
          </Route>

          {/* Color */}
          <Route path="/Color">
          <Route index element={isAuthenticated?<Color/>:<Login/>}/>
          <Route path="new" element={isAuthenticated?<NewColor/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<UpdateColor/>:<Login/>}/>
          </Route>

          {/* Dandi */}
         
          <Route path="/Dandi">
          <Route index element={isAuthenticated?<Dandi/>:<Login/>} />
          <Route path="new" element={isAuthenticated?<NewDandi/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<UpdateDandi/>:<Login/>}/>
         </Route>

          {/* Kunda */}
          <Route path="/Kunda">
          <Route index element={isAuthenticated?<Kunda/>:<Login/>} />
          <Route path="new" element={isAuthenticated?<NewKunda/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<UpdateKunda/>:<Login/>}/>
          </Route>

           {/* Size */}
           <Route path="/Size">
          <Route index element={isAuthenticated?<Size/>:<Login/>}/>
          <Route path="new" element={isAuthenticated?<NewSize/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<UpdateSize/>:<Login/>}/>
          </Route>

          {/* GaugeSize */}
          <Route path="/GaugeSize">
          <Route index element={isAuthenticated?<GaugeSize/>:<Login/>} />
          <Route path="new" element={isAuthenticated?<NewGaugeSize/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<UpdateGaugeSize/>:<Login/>}/>
          </Route>

          {/* Weight */}
          <Route path="/Weight">
          <Route index element={isAuthenticated?<Weight/>:<Login/>}/>
          <Route path="new" element={isAuthenticated?<NewWeight/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<UpdateWeight/>:<Login/>}/>
          </Route>

             
             
              {/* Karigar */}
          <Route path="/Karigar-List">
          <Route index element={isAuthenticated?<Karigar/>:<Login/>}/>
          <Route path="new" element={isAuthenticated?<NewKarigar/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<ViewKarigar/>:<Login/>}/>
          <Route path=":id/update" element={isAuthenticated?<UpdateKarigar/>:<Login/>}/>

          </Route>

          {/* Active Karigar */}
          <Route path="/Active-Karigar">
          <Route index element={isAuthenticated?<ActiveKarigar/>:<Login/>} />
          </Route>

            {/* InActive Karigar */}
            <Route path="/Inactive-Karigar">
          <Route index element={isAuthenticated?<InactiveKarigar/>:<Login/>} />
          </Route>

          {/* Vender */}
          <Route path="/Vender-List">
          <Route index element={isAuthenticated?<Vender/>:<Login/>} />
          <Route path="new" element={isAuthenticated?<NewVender/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<ViewVender/>:<Login/>}/>
          <Route path=":id/update" element={isAuthenticated?<UpdateVender/>:<Login/>}/>
          </Route>

            {/* Product  */}
           <Route path="/Product-List">
           <Route index element={isAuthenticated?<Product/>:<Login/>} />
           <Route path="new" element={isAuthenticated?<NewProduct/>:<Login/>}/>
           <Route path=":id" element={isAuthenticated?<UpdateProduct/>:<Login/>}/>
           <Route path=":id/update" element={isAuthenticated?<ViewProduct/>:<Login/>}/>
           </Route>



           {/* Order */}
           <Route path="/Order-List">
           <Route index element={isAuthenticated?<Order/>:<Login/>} />
          <Route path=":id" element={isAuthenticated?<OrderView/>:<Login/>}/>
          </Route>
          
          {/* About */}
          <Route path="/About">
          <Route index element={isAuthenticated?<About/>:<Login/>} />
          <Route path="new" element={isAuthenticated?<NewAbout/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<ViewDetails/>:<Login/>}/>
          <Route path=":id/update" element={isAuthenticated?<UpdateAbout/>:<Login/>}/>
          </Route>
          
          {/* Home Banner */}
          <Route path="/Home-Banner">
          <Route index element={isAuthenticated?<HomeBanner/>:<Login/>}/>
          <Route path="new" element={isAuthenticated?<NewBanner/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<UpdateBanner/>:<Login/>}/>
          </Route>
          
          
          
          {/* Privacy Policy */}
          <Route path="/Privacy-Policy">
          <Route index element={isAuthenticated?<PrivacyPolicy/>:<Login/>} />
          <Route path="new" element={isAuthenticated?<NewPolicy/>:<Login/>}/>
          <Route path=":id" element={isAuthenticated?<ViewPolicy/>:<Login/>}/>
          <Route path=":id/update" element={isAuthenticated?<UpdatePolicy/>:<Login/>}/>
          </Route>
          

          {/* Error Page */}
          <Route path="*" element={() => <h1>Page not found</h1>} />

        </Route>
      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App