import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck,faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Bookappointment=()=>{
    const navigate=useNavigate();

    const handlebookappointment=()=>{
        navigate("/appointment");
    }
    return(
        <>
        <div className="ba-sec">
            <div className="ba-img">
                <img src="https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg" className="ba-img1" alt="img" />
            </div>
           <div className="ba-text">
                <div className="ba-title">
                    <span>Why choose Health</span>
                </div>
                <p className="ba-desc">
                Discover the reasons to choose Health Plus for your healthcare needs.
                Experience expert care, convenience, and personalized solutions,
                making your well-being our top priority. Join us on a journey to
                better health and a happier life.
                </p>

                <p className="ba-check-first">
                   <FontAwesomeIcon icon={faCircleCheck} style={{color:"#6b5c87"}}/>Best Professional Doctors
                </p>
                <p className="ba-check">
                   <FontAwesomeIcon icon={faCircleCheck} style={{color:"#6b5c87"}}/>Emergency Care
                </p>
                <p className="ba-check">
                   <FontAwesomeIcon icon={faCircleCheck} style={{color:"#6b5c87"}}/>24/7 Support Live Chat
                </p>
                <p className="ba-check-last">
                   <FontAwesomeIcon icon={faCircleCheck} style={{color:"#6b5c87"}}/> Enrollment Easy and Quick
                </p>

                <button className="apoint-btn" type="button" onClick={handlebookappointment}>
                   <FontAwesomeIcon icon={faCalendarCheck}/>Book Appointment
                </button>

            </div>
        </div>
        
        </>
    )
}
export default Bookappointment