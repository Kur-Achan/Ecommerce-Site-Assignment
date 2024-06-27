import './index.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiFlipVerticalBold } from "react-icons/pi";

const Footer= ()=>{
    return(
        <div className="footer">
            <div className='Help'>
             <p><b>May we help you?</b></p>
             <p>My order</p>
             <p>FAQS</p>
             <p>Email Unsubscribe</p>
             <p>Store Location</p>
        </div>
             
             <div className="firm">
        <p><b>The Company</b></p>
             <p>View all Fragrances</p>
             <p>Men's Perfume</p>
             <p>Women's Perfume</p>
             <p>Gift sets</p>
             <p>Testers</p>
             <p>Miniatures</p>
             </div>

             <div className="sub">
             <p><b>Subscribe Us</b></p>
             <PiFlipVerticalBold />
             
             </div>
               <div className="follo"> 
             <p><b>Follow Us</b></p>
             <FaFacebookF />
             <FaXTwitter />
             <FaInstagram />
            </div>
        <div className="quicks">
            <p><b>Quick Links</b></p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Online Refund & returns Policy</p>
        </div>
        </div>
    );
}
export default Footer