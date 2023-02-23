import React , {useState} from 'react'



export default function TextFrom(props) {
    const [text ,setText] = useState();
        
        const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=(event)=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }


  return (
    <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="9" placeholder='Enter text here'></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upercase</button>
            <button className="btn btn-primary"onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
  )
}
