// import React,{useEffect, useState} from 'react'
// import axios from 'axios'
// // import Contact from './Contact'

// export default function DataFetch() {
//   const [post,setPost]=useState([])
//   const [title,setTitle]=useState("")
//   const [description,setDescription]=useState("")
//   const [image,setImage]=useState("")
//   const [price,setPrice]=useState("")

//   useEffect(()=>{
//     axios.get("https://fakestoreapi.com/products")
//     .then(res=>{
//     //   console.log(res.data)
//       setPost(res.data)
//     })

//   },[])
//   let MyStyle ={
//     backgroundColor:"white",
//     borderRadius:"30px",
//     boxShadow:"6px 6px 5px "

//  }
//  const formSubmit =()=>{
//     setPost(old=>[...old,{
//          title,
//         description,
//         price,
//         image,
//     }])
//  }
//  console.log(post)
//   let abc=0;
//   // console.log(post)

//   return (
//     <>
       
//      <div className="container text-center m-5  p-5 bg-light font-bold"> 
//       <h1>List of Employees With Details </h1>
//       <div className="row pt-5 ">

//         {post.map((data) => { 
//           abc++;
//           return abc<25 ?  (
//             <div key={abc} className="col-md-4 mx-auto pt-5">
//           <div>
//             <div>
//               <img className='w-75  pb-5' style={{height:"250px"}} src={data.image} alt="" />
//               <h3>{data.title}</h3> <br />
//               <p>{data.description}</p>
//               <p><em>{data.price} </em>$</p>
//               <button className=' btn btn-primary'>buy now</button>
//             </div>
//           </div>
//         </div>
//           ) : <></>

//           }
        
        
//           )}
//       </div>
//       </div>
    
//       <div className="container    mt-5 py-3 px-4" style={MyStyle}>
//       <form >
//         <h1 className='text-center'>Contact Us</h1>
//       <div className="form-group mt-5">
//     <label htmlFor="exampleInputEmail1"><h4>Enter title</h4></label>
//     <input type="text" className="form-control mt-2" onChange={(e)=>{setTitle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title"/>
//     </div>
    
//   <div className="form-group mt-4">
//     <label htmlFor="exampleInputEmail1"><h4>Enter desc</h4></label>
//     <input type="email" className="form-control mt-2" onChange={(e)=>{setDescription(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description"/>
//     <small id="emailHelp" className="form-text text-muted mt-4">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group mt-4">
//     <label htmlFor="exampleInputPassword1"><h4>Enter source</h4> </label>
//     <input type="text" className="form-control mt-2" onChange={(e)=>{setImage(e.target.value)}} id="exampleInputPassword1" placeholder="url"/>
//   </div>
//   {/* <div className="form-group mt-4">
//     <label htmlFor="exampleFormControlTextarea1"><h4>Your Message <code>(optional)</code></h4></label>
//     <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="3" ></textarea>
//   </div>
//      */}

//     <div className="radios mt-3" onChange={(e)=>{setPrice(e.target.value)}}> 
//   <h4>Enter Price</h4>
//   <div className="form-check">
//   <input className="form-check-input" value={12}  type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
//   <label className="form-check-label" for="flexRadioDefault1">
//     12$
//   </label>
// </div>
 
// <div className="form-check">
//   <input className="form-check-input" value={500} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
//   <label className="form-check-label" for="flexRadioDefault2">
//      500$
//   </label>
// </div>
// <div className="form-check">
//   <input className="form-check-input" value={45.789} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
//   <label className="form-check-label" for="flexRadioDefault2">
//    45.789$
//   </label>
// </div>
// <div className="form-check">
//   <input className="form-check-input" value={10.55} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
//   <label className="form-check-label" for="flexRadioDefault2">
//      10.55$
//   </label>
// </div>
// </div>
//   <div className="button text-center"> 
//   <button type="submit" onClick={formSubmit} className="btn btn-primary mt-4  px-5">Submit</button>
//   </div>
// </form>
// </div>  
//          {/* <Contact button="Submit"/> */}
//     </>
//   )
  
// }
