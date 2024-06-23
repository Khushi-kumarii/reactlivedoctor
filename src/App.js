import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutuspage from './pages/aboutuspage';
import Contactuspage from './pages/contactuspage';
import Appointmentformpage from './pages/appointmentformpage';
import Departmentpage from './pages/departmentpage';
import Doctorloginpage from './pages/doctorloginpage';
import Doctorapintpage from './pages/doctorapintpage';
import Blogpage from './pages/blogpage';
import Blogdetailpage from './pages/blogdetailpage';

function App() {
  const footerdata={home:"This is home",footer:"This is footer"}
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path='/'element={<Homepage footerAppdata={footerdata}/>}/>
         <Route path='/aboutus'element={<Aboutuspage footerAppdata={footerdata}/>}/>
         <Route path='/contactus'element={<Contactuspage footerAppdata={footerdata}/>}/>
         <Route path='/appointment'element={<Appointmentformpage footerAppdata={footerdata}/>}/>
         <Route path='/department'element={<Departmentpage footerAppdata={footerdata}/>}/>
         <Route path='/doctor'element={<Doctorloginpage footerAppdata={footerdata}/>}/>
         <Route path='/doctorapint'element={<Doctorapintpage footerAppdata={footerdata}/>}/>
         <Route path='/blog'element={<Blogpage footerAppdata={footerdata}/>}/>
         <Route path='/blogdetail'element={<Blogdetailpage footerAppdata={footerdata}/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
