import { useState } from "react";
import { customerReview } from "../scripts/review";
const Review=()=>{
    let Msg,name,location;
    const reviewlength=customerReview.length-1;
    const [review,setReview]=useState(0);

    const backBtnClick=()=>{
        setReview(review<=0 ? reviewlength:review-1);
        handleUpdation();
    };
    const frontBtnClick=()=>{
        setReview(review>=reviewlength ? 0: review+1);
        handleUpdation();
    };

    const handleUpdation=()=>{
        const reviewMsg=customerReview[review];
        name=reviewMsg.name;
        Msg=reviewMsg.message;
        location=reviewMsg.location;
    };
    handleUpdation();
  return(
  <>
     <div className="review" id="r1">
           <div className="r-cont">
                <p className="r-title">
                  More over <span className="num">1500+ Customers</span>
                </p>
              <p className="desc">Don't believe us ,Check Clients word</p>

              <p className="r-format">
                <span className="quote1">''</span>
                 <span className="rw">{Msg}</span>
                 <span className="quote2">''</span>
              </p>
              
              <div className="author">
                <div className="name">
                   <p className="reviewer-name">{name}</p>
                   <p className="reviewer-place">{location}</p>
                </div>
                
                {/* <div className="r-btn"> */}
                 
                   
                {/* </div> */}
          <button className="back-btn" type="button" onClick={backBtnClick}> ←</button>
          <button className="frnt-btn" type="button" onClick={frontBtnClick}>→</button> 
              </div>
              
           </div>
     </div>
  
  </>
  )
}
export default Review