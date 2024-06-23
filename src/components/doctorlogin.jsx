import { useNavigate } from "react-router-dom"

const Doctorlogin=()=>{

  const navigate=useNavigate();
  const doctorapinthandle=()=>{
    navigate('/doctorapint')
  }
    return(<>
  <section className="dtc">
            <div className="row12">
              <div className="col-12">
                <div className="dtc1">
                  <h3>Our Experts</h3>
                  <p>
                  The list of certified doctors with years of <br />
                  professional experiences
                  </p>
                </div>
              </div>
            </div>
        </section>
      <section className="doctor">
        <div className="doctor-cont">
           <div className="doctor-head">
              <div className="isotop">
                <p className="doctor-p1">Sort by :</p>
                <ul className="doctor-ul">
                    <li className="act"><span>All</span></li>
                    <li><span>Cardiology</span></li>
                    <li><span>Emergency</span></li>
                    <li><span>Pediatric</span></li>
                    <li><span>Pyschiatry</span></li>
                    <li><span>Others</span></li>
                </ul>
              </div>
            </div>
            <div className="doctor-grid">
            <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="#">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_1.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a onClick={doctorapinthandle}>Dr. Lisa Chen,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Johnson is a highly experienced emergency medicine
                     physician with over 15 years of experience. He is board-
                     certified in emergency medicine and has a special interest
                     in disaster management.
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="#">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_2.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a onClick={doctorapinthandle}>Dr. William,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Johnson is a highly experienced emergency medicine
                     physician with over 15 years of experience. He is board-
                     certified in emergency medicine and has a special interest
                     in disaster management.
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="/doctors">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_3.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. Alina,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Lee is a skilled emergency medicine physician with 
                    expertise in the treatment of acute medical conditions. 
                    She is board-certified in emergency medicine and has a 
                    special interest in cardiac.
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="#">
                    <img src="	https://prohealth-react.vercel.app/images/doctors/doctor_4.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. Mae Jemison,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Johnson is a highly experienced emergency medicine
                     physician with over 15 years of experience. He is board-
                     certified in emergency medicine and has a special interest
                     in disaster management.
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="#">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_5.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. Patrick,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Johnson is a highly experienced emergency medicine
                     physician with over 15 years of experience. He is board-
                     certified in emergency medicine and has a special interest
                     in disaster management.
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="/doctors">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_6.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. Roberta,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Bones is a dedicated pediatrician with a focus on providing 
                    comprehensive care to children of all ages. He is board-certified 
                    in pediatrics and has a special interest in childhood obesity
                  </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="/doctors">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_7.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. Charles joh,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Lee is a skilled cardiologist with expertise in the 
                    diagnosis and treatment of cardiovascular disease. 
                    He is board-certified in cardiology and has a special 
                    interest in preventive cardiology.
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="/doctors">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_8.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. Martin Richel,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Kim is a renowned cardiologist with over 20 years
                   of experience. She is board-certified in cardiology and 
                   has a special interest in the treatment of heart failure and arrhythmias.
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="/doctors">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_9.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. Adams wing,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Smith is a board-certified cardiologist with 
                    extensive experience in the management of complex 
                    cardiac conditions. He has a special interest in interventional
                    cardiology
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="#">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_10.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. Lisa Chen,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Johnson is a highly experienced emergency medicine
                     physician with over 15 years of experience. He is board-
                     certified in emergency medicine and has a special interest
                     in disaster management.
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="#">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_11.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. John Adams,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Johnson is a highly experienced emergency medicine
                     physician with over 15 years of experience. He is board-
                     certified in emergency medicine and has a special interest
                     in disaster management.
                    </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>

               <div className="doctor-col">
                 <div className="doctor-img">
                  <a className="doctor-block" href="/doctors">
                    <img src="https://prohealth-react.vercel.app/images/doctors/doctor_12.png" alt="" />
                  </a>
                  <div className="doctor-label">Emergency Department</div>
                 </div>
                <div className="doctor-des">
                  <div>
                    <h3 className="doctor-name">
                      <a  onClick={doctorapinthandle}>Dr. Margaret,MD</a>
                    </h3>
                    <p className="doctor-p">Emergency medicine specialtist</p>
                    <p className="doctor-pp">
                    Dr. Chen is a skilled psychiatrist with expertise in the
                     treatment of mood disorders and psychotic disorders. 
                     She is board-certified in psychiatry and has a special 
                     interest in the management.
                     </p>
                  </div>
                  <div>
                  <div className="links-d">
                        <a href="#">
                        
                        <svg xmlns="#"
                        height="1em" 
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                       </a>
                        <a href="#">
                       
                        <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        </a>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="1em"
                        aria-hidden="true"
                        width="0.63em"
                        role="img">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
               </div>
            </div>
        </div>
      </section>
    
    </>)
}
export default Doctorlogin