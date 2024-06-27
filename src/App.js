
import {React}from "react"
import Navbar from './Navbar'
import { GetProducts } from "./hooks/useGetProducts"
import Footer from "./Footer"



  const App=()=>{
    return(
      <div>
   <Navbar/>
   <GetProducts/>
   <Footer/>
  
 
      </div>
     
    )
  }

export default App;







 






