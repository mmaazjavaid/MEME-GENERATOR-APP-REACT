import React,{useState} from "react"
import memesData from "../memesData"

export default function Meme() {


    // const [isImportant,setisImportant]= useState("Get a new meme image 🖼");
    // const [counter,setCounter]=useState(0);




    const [memeImage,setmemeImage]=useState("");

    const handleMemeImage=()=>{
        var {url} = memesData.data.memes[Math.floor(Math.random()* memesData.data.memes.length)];

        setmemeImage(url);
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
            <img className="meme--image" src={memeImage} alt="memeImage"  />
        </main>
    )
}