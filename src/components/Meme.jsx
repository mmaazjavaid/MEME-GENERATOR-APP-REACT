import React,{useState} from "react"
import memesData from "../memesData"

export default function Meme() {


    const [isImportant,setisImportant]= useState("Get a new meme image 🖼");
    const [counter,setCounter]=useState(0);
    
    const incrementCounter=()=>{
        setCounter(prevCounter=> prevCounter+1);
    }
    const decrementCounter=()=>{
        setCounter(prevCounter=> prevCounter-1);
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
                    
                >
                 {counter}   
                </button>
                
            </div>
            <button onClick={incrementCounter}>increment</button>
            <button onClick={decrementCounter}>decrement</button>
        </main>
    )
}