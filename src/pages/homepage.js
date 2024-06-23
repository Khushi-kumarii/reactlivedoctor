import Aboutus from "../components/aboutus"
import Bookappointment from "../components/bookappointment"
import Deaprtments from "../components/departments"
import Doctor from "../components/doctor"
import Footer from "../components/footer"
import Header from "../components/header"
import Home from "../components/home"
import Info from "../components/info"
import Review from "../components/review"

const Homepage=(footerAppdata)=>{
    return(
        <>
        {<Header footerSpecificData={footerAppdata.footerAppdata.footer}/>}
        {<Home/>}
        {<Info/>}
        {<Deaprtments/>}
        {<Bookappointment/>}
        {<Review/>}
        {<Doctor/>}
        {<Footer/>}
        </>
    )
}
export default Homepage