import React, {useState} from 'react'



export default function TextForm(props) {

    
    const handleupClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("Converted to Uppwe Case !" , "success");
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)

        props.showAlert("Converted to Lower Case !" , "success");
    }
    const handleClClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = ' ';
        setText(newText)
        props.showAlert("You've cleared the keyboard completely!" , "success");
    }
    const handleOnChange = (event)=>{
        // console.log("handle On Changed");
        setText(event.target.value);
        // props.showAlert("cle!" , "success");
    }

    const handleCopy =()=>{
        console.log("I Am copy");
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRAng(0,999999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy To KeyWord!" , "success");
    }

    const hendleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Space!" , "success");
    }


    const [text ,setText] = useState(' ');
    // text = " New State" wrong way to change state 
    // setText("New State"); // This is corect way
  return (
    <>
<div className='container'  style={{color : props.mode === 'dark' ? 'white' : ' #042743'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : ' white' , color: props.mode === 'dark' ? 'white' : ' #042743' }} 
      id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert To UPPER Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LOWER Case</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy KeyBorad</button>
      <button className="btn btn-primary mx-2" onClick={hendleExtraSpace}>Remove Extra Space</button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear All</button>



</div>
 <div className='container my-3' style={{color : props.mode === 'dark' ? 'white' : ' #042743'}}>
  <h1>Your text Summary</h1>
  <p>{text.split(" ").length} Words And {text.length} Characters</p>
  <p>{0.008 * text.split(" ").length}  -- Minutes To Read</p>

  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter Something In The TextBox Above To Prview It Here"}</p>
 </div>

 </>
  )
}