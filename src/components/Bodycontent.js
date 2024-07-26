import React, { useState } from 'react';
import './Bodycontent.css';

function Bodycontent({mode, hdcolor}) {
    const [text, setText] = useState("");

    const handleUpperCase = () => {
        let uppercase = text.toUpperCase();
        setText(uppercase);
    }
    const handleLowerCase = () => {
        let lowercase = text.toLowerCase();
        setText(lowercase);
    }
    const handleClearText = () => {
        setText("");
    }
    const onchangeHandler = (event) => {
        setText(event.target.value);
    }
    
    return (
        <div className='content'>
            <h1 id='heading' style={{color: hdcolor}}>Enter your text here</h1>
            <textarea rows={10} value={text}  onChange={onchangeHandler} style={{backgroundColor: mode, color: hdcolor}}></textarea>
            <div className='btn'>
            <button className='uppercase_btn' onClick={handleUpperCase}>Convert to uppercase</button>
            <button className='uppercase_btn' onClick={handleLowerCase}>Convert to lowercase</button>
            <button className='uppercase_btn' onClick={handleClearText}>Clear Text</button>
            </div>

            <div className='para'>
            <p><span style={{color: hdcolor}}>{text.split(" ").length}</span> words in the text</p>
            <p><span style={{color: hdcolor}}>{text.length}</span> letters in the text</p>
            </div>

        </div>
    )
}

export default Bodycontent;