import React,{useState} from "react"
import memesData from "../memesData"
import ImageContainer from "./ImageContainer"
export default function Meme() {


    const [meme,setMeme]=useState({
        topText:" ",
        bottomText:" ",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages,setallMemeImages]=useState(memesData)

    const handleMemeImage=()=>{
        var {url} = allMemeImages.data.memes[Math.floor(Math.random()* allMemeImages.data.memes.length)];
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                randomImage:url
            }
        })
        
    }
    
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={handleMemeImage}
                >
                 Get a new meme image 🖼  
                </button>
                
            </div>
            <ImageContainer randomImage={meme.randomImage} />
        </main>
    )
}