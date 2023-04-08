/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked')
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('converted to upper case', 'success')
  }

  const handleLoClick = () => {
    // console.log('Uppercase was clicked')
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('converted to Lower case', 'success')
  }

  const handleOnChange = (event) => {
    //console.log('On Change')
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value)
  }

  const handleClearClick = () => {
    // console.log('Uppercase was clicked')
    let newText = ''
    setText(newText)
    props.showAlert('Text has been cleared', 'success')
  }

  const handleCopy = () => {
    var text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('copied to clipboard', 'success')
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('Extra Space Removed', 'success')
  }

  const [text, setText] = useState('Enter text here')

  //setText('New Text Here')

  return (
    <>
      <div
        className='container'
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
            }}
            rows='8'
            id='myBox'
          ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>
          Convert To Lower Case
        </button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>
          Clear Text
        </button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>
          Copy Text
        </button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div
        className='container my-2'
        style={{
          color: props.mode === 'dark' ? 'white' : '#042743',
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
      </div>
      <div
        className='container my-2'
        style={{
          color: props.mode === 'dark' ? 'white' : '#042743',
        }}
      >
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  )
}
