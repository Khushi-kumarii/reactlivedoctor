import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Departments=()=>{
   const navigate=useNavigate();

   const departmenthandle=()=>{
      navigate('/department')
   }
    return(<>
        <section className="depart">
            <div className="dept-container">
               <div className="dept-heading">
                 <h3>Our Departments</h3>
                 <h2>For your Health</h2>
                 </div>
                   <div className="row">
                   
                   <div className="col-xl-4 col-md-6" onClick={departmenthandle}>
                    <a className='cs-icon'>
                    <div className="icon">
                       <img src="https://prohealth-react.vercel.app/images/home_2/department_icon_1.svg" alt="" />
                    </div>
                    <h2 className='cs-title'>Emergency Deaprtment</h2>
                    </a>
                   </div>
                   
                   <div className="col-xl-4 col-md-6" onClick={departmenthandle}>
                   <a className='cs-icon' href="#">
                    <div className="icon">
                       <img src="https://prohealth-react.vercel.app/images/home_2/department_icon_2.svg" alt="" />
                    </div>
                    <h2 className='cs-title'>Pediatric Department</h2>
                    </a>
                   </div>
                   
                   <div className="col-xl-4 col-md-6" onClick={departmenthandle}>
                   <a className='cs-icon' href="#">
                    <div className="icon">
                       <img src="https://prohealth-react.vercel.app/images/home_2/department_icon_3.svg" alt="" />
                    </div>
                    <h2 className='cs-title'>Obstetrics and Gynacology Deaprtment</h2>
                    </a>
                   </div>
                  
                   <div className="col-xl-4 col-md-6" onClick={departmenthandle}>
                   <a className='cs-icon' href="#">
                    <div className="icon">
                       <img src="https://prohealth-react.vercel.app/images/home_2/department_icon_4.svg" alt="" />
                    </div>
                    <h2 className='cs-title'>Cardiology Deaprtment</h2>
                     </a>
                   </div>
                   
                   <div className="col-xl-4 col-md-6" onClick={departmenthandle}>
                   <a className='cs-icon' href="#">
                    <div className="icon">
                       <img src="https://prohealth-react.vercel.app/images/home_2/department_icon_5.svg" alt="" />
                    </div>
                    <h2 className='cs-title'>Neurology Deaprtment</h2>
                    </a>
                   </div>
                   
                   <div className="col-xl-4 col-md-6" onClick={departmenthandle}>
                   <a className='cs-icon' href="#">
                    <div className="icon">
                       <img src="https://prohealth-react.vercel.app/images/home_2/department_icon_6.svg" alt="" />
                    </div>
                    <h2 className='cs-title'>Psychiatry Deaprtment</h2>
                    </a>
                   </div>

              </div>
               
            </div>
        </section>    
    
    </>
    )
}
export default Departments