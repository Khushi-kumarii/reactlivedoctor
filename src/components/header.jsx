import { useNavigate } from "react-router-dom";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarCheck}from "@fortawesome/free-solid-svg-icons";
const Header=()=>{
    const navigate= useNavigate();

    const handlebookappointment=()=>{
        navigate('/appointment');
    }


    return(
        <>
        <div className="navbar">
            <h1 className="title">
                ProHealth <span className="sign">+</span>
            </h1>
            <ul className="list"> 
             <li className="link" onClick={()=>{navigate('/')}}>Home</li>
             <li className="link" onClick={()=>{navigate('/aboutus')}}>AboutUs</li>
             <li className="link" onClick={()=>{navigate('/contactus')}}>ContactUs</li>
             <li className="link" onClick={()=>{navigate('/blog')}}>Blog</li>
             <li className="link" onClick={()=>{navigate('/doctor')}}>Find Doctor</li>
            </ul>            
       
        <button className="nav-btn" type="button" onClick={handlebookappointment}>
        <FontAwesomeIcon icon={faCalendarCheck} />Book Appointment</button>

        </div>
        </>
    )
}
export default Header