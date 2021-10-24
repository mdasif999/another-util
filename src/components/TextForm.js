import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
    }

    const handleloClick = ()=>{
       // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText);
    }
    const handleClearClick = ()=>{
         let newText =''; 
         setText(newText);
     }

        const handleOnChnage = (event)=>{
        console.log("on Chnage");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handelExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState(' ');
    return (
        <>
        <div className="container">
     <h1>{props.heading}</h1>
<div className="mb-3">
   <label htmlFor="myBox" className="form-label"></label>
   <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to UpperCase</button>
<button className="btn btn-info mx-1" onClick={handleloClick}>convert to LowerCase</button>
<button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-success mx-1" onClick={handleCopy}>Copy text</button>
<button className="btn btn-success mx-1" onClick={handelExtraspaces}>Remove extra space</button>
        </div>
        <div className="container my-2 ">
<h2>Your text Summary</h2>
<p>{text.split(" ").length} word and {text.length} charecters </p>
<p>{0.008 * text.split(" ").length} minutes read  </p>
<h2>Preview</h2>
<p>{text}</p>
        </div>
        </>
    )
}
 