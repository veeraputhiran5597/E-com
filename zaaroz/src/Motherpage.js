import React from "react";
import Myapp from "./Myapp";
import Offers from "./Routerpage/Offers";
import Grosery from "./Routerpage/Grosery";
import Mobiles from "./Routerpage/Mobiles";
import Fashion from "./Routerpage/Fashion";
import Electronics from "./Routerpage/Electronics";
import Homeapplaince from "./Routerpage/Homeapplaince";
import Kitchenapplinces from "./Routerpage/Kitchenapplinces";
import Loginpage from "./Frontpage/Loginpage";
import Cartpage from "./Frontpage/Cartpage";
import{createBrowserRouter,RouterProvider}from "react-router-dom";




class Motherpage extends React.Component
{

  Routerdata=[
    
    {path:"/",element:<Myapp/>},

    {path:"/offerpath",element:<Offers/>},
    
    {path:"/Groserypath",element:<Grosery/>},
    
    {path:"/mobiespath",element:<Mobiles/>},
    
    {path:"/Fashionpath",element:<Fashion/>},

    {path:"/Electronicspath",element:<Electronics/>},

    {path:"/Homeapplaincepath",element:<Homeapplaince/>},

    {path:"/Kitchenapplincespath",element:<Kitchenapplinces/>},

    {path:"/Loginpagepath",element:<Loginpage/>},

    {path:"/Cartpagepath",element:<Cartpage/>}

]

Frontpagerout=createBrowserRouter(this.Routerdata)

  render(){
    return(
      <>
     <RouterProvider router={this.Frontpagerout} />
      </>
    )
  }
}

export default Motherpage;