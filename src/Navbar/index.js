import  './index.css';
import { AiOutlineShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
const Navbar = ()=>{

    return(
    
<div className='nav'>
    <p>+ Contact Us</p>

    <h1 className='fumes'>Perfume Forever</h1>
    <p className='sales'>Flash Sales 15% off on all women's Perfume</p> <AiOutlineShopping /> <CgProfile /> <IoMdMenu />

    <p className='key'>Luxury is key!</p>
    
</div>
    );
}
export default Navbar;




