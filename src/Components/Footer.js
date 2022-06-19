import React from 'react'

export default function Footer() {
    let myStyle ={
        height :"100px",
        marginTop: "300px"
    }
  return (
    <>
      <div className="container-fluid bg-dark " style={myStyle} >
               <div className="text text-light text-center pt-5"> 
              <p> @ All copyright reserved for TextUtils </p>
              </div>
      </div>
    </>
  )
}
