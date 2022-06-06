import React from 'react'

function Button(props) {
  return (
    
        <button className="form--button" style={props.on===true?{backgroundColor:"black"}:{backgroundColor:"green"}} onClick={props.onClick}>
         Get a new meme image 🖼  
        </button>
    
  )
}

export default Button