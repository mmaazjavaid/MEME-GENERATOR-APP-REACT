import React from "react"
import memesData from "../memesData.js"
import { useState,useEffect } from "react"
//lesson 57 done
export default function Meme() {
    
     
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [Memes,setMemes]=useState([]);
    useEffect(() => {
        console.log("effect ran")
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setMemes(data.data.memes))
    }, []);
    
    
     function getMemeImage() {
         const memesArray = Memes
         const randomNumber = Math.floor(Math.random() * memesArray.length)
         const url = memesArray[randomNumber].url
         setMeme(prevMeme => ({
             ...prevMeme,
             randomImage: url
         }))
         
     }
    
    const handlechange=(e)=>{
        const {name,value}=e.target
        setMeme(prevmeme=>{
            return{
                ...prevmeme,
                [name]:value
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
                    name="topText"
                    value={meme.topText}
                    onChange={handlechange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handlechange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}