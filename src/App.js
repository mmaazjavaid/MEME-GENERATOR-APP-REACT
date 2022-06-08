import Header from './components/Header';
import Meme from './components/Meme';
import { useState } from 'react';
import './index.css';

function App() {
  const [firstname,setfirstname]= useState("");
  const handlechange=(event)=>{
    setfirstname(event.target.value)
    console.log(firstname);
  }
  return (
    // <div className="App">
    //   <Header/>
    //   <Meme/>
    // </div>
    <form>
      <input
      type="text"
      placeholder="enter some input"
      onChange={handlechange} 
        />
    </form>
  );
}
//Conditional rendering thorouly done
export default App;
