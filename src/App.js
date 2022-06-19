
import './App.css';
import Aboutus from './Components/Aboutus';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Contact from './Components/Contact';
// import Check from   './Components/Check'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom"
import Footer from './Components/Footer';
// import DataFetch from './Components/DataFetch';


function App() {
  return (

    <>
    <Router> 
    <Navbar title="TexUtils" about="About" />
    
    <Routes>
          {/* <Route  path="/data" element={ <DataFetch />}/> */}
          <Route  path="/about" element={<Aboutus button="Enable dark mode" />} />
          <Route   exact path="/contact" element={<Contact button="Submit"/>} />
          <Route  path="/" element={ <Textform heading="Enter Text Here To Analyze " button="Convert to Uppercase" />}/>
          {/* <Route   exact path="/check" element={<Check button="Submit"/>} /> */}

          
        </Routes>
      </Router>
      <Footer />
    </>

  );
}

export default App;
