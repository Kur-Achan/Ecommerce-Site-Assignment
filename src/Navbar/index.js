import  './index.css';
import { AiOutlineShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Navbar = ()=>{

    return(
    
<div className='nav'>
    <p>+ Contact Us</p>

    <h1 className='fumes'>Perfume Forever</h1>
    <p className='sales'>Flash Sales 15% off on all women's Perfume</p> <AiOutlineShopping  className='bag'/> <CgProfile  className='profile'/> <IoSearch  className='search'/>
 <IoMdMenu  className='list'/> <p className='menu'>Menu</p>


    <p className='key'>Luxury is key!</p>
    
</div>
    );
}
export default Navbar;




