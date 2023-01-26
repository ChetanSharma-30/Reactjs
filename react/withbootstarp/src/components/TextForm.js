import React, {useState} from "react";



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");

        let newText = text.toUpperCase();
    setText(newText);
    // setText("You have clicked on handleUpClick");

    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter Text Here');
    // setText('This is how we change text here')
    // setText("Type here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
