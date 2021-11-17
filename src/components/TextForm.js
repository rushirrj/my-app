import React,{useState} from 'react'

function TextForm(props) {
    const handleUpCLick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleClearCLick = () =>{
        let newText = ""
        setText(newText)
    }
    const handleLowCLick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text,setText] = useState("");

    return (
        <>
        <div className="container"  style={{color :props.mode==='dark'?'white':'black'}}>
            <div><h1>{props.heading}</h1></div>

            <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor :props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpCLick}>
                Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLowCLick}>
                Convert To LowerCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearCLick}>
                Clear text
            </button>
            
        </div>

        <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to textbox"}</p>
        </div>
        </>
    )
}

export default TextForm
