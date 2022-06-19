import React, { useState } from 'react'
export default function Textform(props) {

    let MyStyle ={
        backgroundColor:"white"
    }

    const Uppercase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const Clear = () => {
        let newText = " ";
        setText(newText)
    }
    const Mirror = () => {
        let newText = text.split("").reverse("").join("");
        setText(newText)
    }
    const Copy = () => {
        var text=document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const onChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container  mt-5 py-4 " style={MyStyle} >
                <h1>{props.heading}  </h1>
                <div className="mb-2 text-center " >
                    <textarea className='form-control' value={text} onChange={onChange} id="textbox" rows="8"></textarea>
        
                    <button type="submit" className="btn btn-primary mt-4 " onClick={Uppercase} >{props.button}</button>
                    <button type="submit" className="btn btn-primary mt-4 mx-2" onClick={lowerCase} >Convert to lowercase</button>
                    <button type="submit" className="btn btn-primary mt-4 mx-2" onClick={Clear} >Clear Text</button>
                    <button type="submit" className="btn btn-primary mt-4 mx-2" onClick={Mirror} >Mirror text</button>
                    <button type="submit" className="btn btn-primary mt-4 mx-2" onClick={Copy} >Copy text</button>
                    




                </div>
            </div>
            <div className="container my-5   p-5" style={MyStyle} >
                <h2>Your text summary:</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                <h2>Preview text Here:</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
