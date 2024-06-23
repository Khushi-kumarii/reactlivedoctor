import { useNavigate } from "react-router-dom"
const Contact=()=>{
  const navigate=useNavigate();
  const sub1=()=>{
    navigate('/blog')
  }
    return(<>
    <section className="banner">
      <div className="banner-img">
        <img src="https://img.freepik.com/premium-photo/stethoscope-doctors-examination-background-medical-laboratory-health-table-with-space-text-purple-background-stethoscope_170532-4445.jpg" alt="" />
      </div>
      <div className="contact">
        <div className="banner-text">
          <h2 className="bold">Contact Us</h2>
          <p className="txt">Kindly reach us to get the fastest response and treatment.</p>
        </div>
      </div>
      </section>
      <div className="contact-form">
         <div className="row1">
          <div className="col-lg-10 c1">
             <div className="box">
                <div className="row2">
                   <div className="col-lg-6">
                     <label htmlFor="name" className="lab-name">Name</label>
                     <input type="text" className="inn" placeholder="David john"/>
                   </div>
                   <div className="col-lg-6">
                     <label htmlFor="e-mail" className="lab-name" >E-mail</label>
                     <input type="text" className="inn" placeholder="David@gmail.com"/>
                   </div>
                   <div className="col-lg-12">
                     <label htmlFor="subject" className="lab-name">Subject</label>
                     <input type="text" className="inn" placeholder="Your subject"/>
                   </div>
                   <div className="col-lg-12">
                     <label htmlFor="subject" className="lab-name">Message</label>
                     <textarea cols="30" rows="10" type="text" className="msg" placeholder="Write something..."/>
                   </div>
                   <div className="col-lg-12">
                     <button className="sub-btn">
                       <span onClick={sub1}>Submit</span>
                      <i>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                      width="1rem">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                      </i>
                    
                     </button>
                   </div>
                   
                </div>
             </div>
          </div>
         </div> 
      </div>
     
    </>
    )
}
export default Contact