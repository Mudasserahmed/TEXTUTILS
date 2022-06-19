
import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Aboutus(props) {
  const [myStyle, setmyStyle] = useState({
    backgroundColor:"white",
    color:"black",
    padding:"10px"
  }); 

  let changeStyle = ()=>{
     if(myStyle.color ==="black"){
          setmyStyle({
            backgroundColor:"black",
            color:"white",
            padding:"10px"
          })
     }
     else {
      setmyStyle({
        backgroundColor:"white",
        color:"black",
        padding:"10px"
      })
     }

  }
  return (
  
    <>
      <div className="container mt-5 p-4" style={myStyle} >
        <h1>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingOne" >
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" >
                <h3>This app</h3>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"> This is an app related to textutils where you can type some text and manipulate the text according to your needs <code>and requirments</code> it is one of the best apps related to text</div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <h3>Who are we </h3>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={myStyle}>we are a team of self tought web developers who are passionate to work in the react library  <code>react</code> is one of the best javascript library in the world so we have  built this project using react .</div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <h3>Know more</h3>  
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">To know more about our team and for more information please contact us through this form  <code><Link to="/contact">contact us</Link></code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              
            </div>
          </div>
          {/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */}
          <button type="submit" onClick={changeStyle} className="btn btn-primary m-3  " >{props.button}</button>
        </div>

      </div>
    </>
  )
}
