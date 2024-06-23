import React from "react"
const Info=()=>{
    return(
    <>
       <div className="info-sec">
          <div className="info-content">
             <div className="info-title">
                <span>What we do</span>
             </div>
             <p className="info-desc"> 
             We bring healthcare to your convenience, offering a comprehensive
            range of on-demand medical services tailored to your needs. Our
            platform allows you to connect with experienced online doctors who
            provide expert medical advice, issue online prescriptions, and offer
            quick refills whenever you require them.
             </p>
          </div>

          <div className="info-card">
            <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className="first">
                   <h4><a>Emergency Care</a></h4>
                    <p className="p">
                    Our Emergency Care service is designed to be your reliable support
                    in critical situations. Whether it's a sudden illness, injury, or
                    any medical concern that requires immediate attention, our team of
                    dedicated healthcare professionals is available 24/7 to provide
                    prompt and efficient care.
                    </p>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="first">
                    <h4><a>Dental Care</a></h4>
               
                    <p className="p">
                    Smile with confidence as our Dental Care services cater to all your
                    oral health needs. Our skilled dentists provide a wide range of
                    treatments, from routine check-ups and cleanings to cosmetic
                    procedures and restorative treatments.
                    </p>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="first">
                    <h4><a>Heart Disease</a></h4>
                    <p className="p">
                    Our team of experienced cardiologists and medical experts use
                    state-of-the-art technology to assess your cardiovascular health and
                    design personalized treatment plans. From comprehensive screenings
                    to advanced interventions, we are committed to helping you maintain
                    a healthy heart and lead a fulfilling life.
                    </p>
                </div>
            </div>
          </div>
       </div>

    
    </>
    )
}
export default Info