import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {ToastConatainer,toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
const Appointmentform=()=>{
   const navigate=useNavigate();

   const bookapint=()=>{
      navigate('/doctor')
   }

  const [patientname,getPatientname]=useState('');
  const [patientphone,getPatientphone]=useState('');
  const [patientgender,getPatientgender]=useState('');
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formerror,getFormerror]=useState('');
  const patientphoneRegex=/^[0-9]{10}$/;
  const patientnameregex = /^[a-z A-Z]{2,15}$/;
  const emailregex = /^[a-z A-Z 0-9]+@[a-z]+\.[a-z]{2,6}$/;

   const patientnameHandler=(event)=>{
      getPatientname(event.target.value);
   }
   const emailHandler = (event) => {
      getEmail(event.target.value);
  }
   const phoneHandler=(event)=>{
      getPatientphone(event.target.value);
   }
   const passwordHandler = (event) => {
      getPassword(event.target.value);
  }
   const genderHandler=(event)=>{
      getPatientgender(event.target.value);
   }
   const SubmitHandler=(e)=>{
    e.preventDefault();

    if (patientname == '') {
      getFormerror('Please, Enter your firstname..')
         return false;
   } else if(!patientname.match(patientnameregex)){
         getFormerror('Please, Enter letters only..')
   }
   else if(patientphone==''){
      getFormerror('Please, Enter Phone number..')
   }
   else if(!patientphone.match(patientphoneRegex)){
      getFormerror('Please, Enter numbers only..')
   }
    else if(patientgender==''){
       getFormerror('Please, select patient gender..')
    }
   else if (email == '') {
      getFormerror('Please, Enter your email...')
      return false;
  } else if (!email.match(emailregex)) {
      getFormerror('Please, Enter valid mail...')
      return false;
  }
  else if (password == '') {
   getFormerror('Please, Enter your password...')
   return false;
}

     
    toast.success("Appointment Scheduled !", {
      // position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

    return(
    <>
       <div className="appoin-sec">
          <h1 className="legal-title">
            <Link to="/">
            ProHealth <span className="legal-sign">+</span></Link>
          </h1>
          <div className="form-contain">
            <h2 className="form-title">
                <span>Book Appointment Online</span>
            </h2>
            <div className="error">{formerror}</div>
             <form className="form-content"  onSubmit={SubmitHandler}>
                  <label htmlFor="patientname">Patient Name</label>
                  <input type="text" placeholder="Patient's Name" value={patientname} onChange={patientnameHandler} /> <br/>
                  
                  <label htmlFor="patientphone">Patient Phone no.</label>
                  <input type="tel" placeholder="Phone no." value={patientphone} onChange={phoneHandler} /><br/>

            <label htmlFor="patientgender">Patient Gender</label>      
                  <div className="in-lab">
                     <select value={patientgender} onChange={(e) => getPatientgender(e.target.value)}>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                     </select>
                  </div>

                  {/* <label htmlFor="patientgender">Patient Gender</label>
                  <input type="text" value={patientgender} onChange={genderHandler} /><br/> */}

                  <label htmlFor="patientgender">Email</label>
                  <input type="text" placeholder="E-mail" value={email} onChange={emailHandler} /><br/>

                  <label htmlFor="patientgender">Password</label>
                  <input type="text" placeholder="Password" value={password} onChange={passwordHandler} /><br/>
                 {/*                   
                  <label htmlFor="appointmentTime"> Preferred Appointment Time:</label>
                  <input type="datetime-local"  value={appointmentTime} onChange={appointmentHandler} /><br/> */}
                
                
                 {/*                   
                  <label htmlFor="patientname">Preferred Mode:</label>
                  <input type="text"  value={patientname} onChange={patientnameHandler} />
                   */}
             
                 <button type="submit" className="apoint-btn" onClick={bookapint}>
                      Confirm Appointment
                 </button>
              <p className="success" style={{display: isSubmitted? "block" :"none"}}>Appointment details has been sent to the patients phone number via SMS.</p>  
             </form>
             </div>
            <div className="legal-footer">
            <p>© 2013-2023 Health+. All rights reserved.</p>
            </div>

          
       </div>
    </>
    )
}
export default Appointmentform