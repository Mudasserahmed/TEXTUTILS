import React from 'react'

export default function Contact(props) {


  
  let MyStyle ={
     backgroundColor:"white",
     borderRadius:"30px",
     boxShadow:"6px 6px 5px "

  }

  return (

    <>
    <div className="container    mt-5 py-3 px-4" style={MyStyle}>
      <form >
        <h1 className='text-center'>Contact Us</h1>
      <div className="form-group mt-5">
    <label htmlFor="exampleInputEmail1"><h4>Enter name</h4></label>
    <input type="text" className="form-control mt-2"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
    </div>
    
  <div className="form-group mt-4">
    <label htmlFor="exampleInputEmail1"><h4>Enter email</h4></label>
    <input type="email" className="form-control mt-2"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted mt-4">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-4">
    <label htmlFor="exampleInputPassword1"><h4>Enter password</h4> </label>
    <input type="password" className="form-control mt-2"  id="exampleInputPassword1" placeholder="password"/>
  </div>
  {/* <div className="form-group mt-4">
    <label htmlFor="exampleFormControlTextarea1"><h4>Your Message <code>(optional)</code></h4></label>
    <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="3" ></textarea>
  </div>
     */}

    <div className="radios mt-3" > 
  <h4>Enter Price</h4>
  <div className="form-check">
  <input className="form-check-input"   type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    12$
  </label>
</div>
 
<div className="form-check">
  <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" for="flexRadioDefault2">
     500$
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" for="flexRadioDefault2">
   45.789$
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" for="flexRadioDefault2">
     10.55$
  </label>
</div>
</div>
  <div className="button text-center"> 
  <button type="submit" className="btn btn-primary mt-4  px-5">{props.button}</button>
  </div>
</form>
</div>  
    </>
  )
}
