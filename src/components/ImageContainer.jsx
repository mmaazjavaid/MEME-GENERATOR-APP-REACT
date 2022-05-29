import React from 'react'

function ImageContainer(props) {
  return (
    <div>
        <img className="meme--image" src={props.randomImage} alt="memeImage"  />
    </div>
  )
}

export default ImageContainer