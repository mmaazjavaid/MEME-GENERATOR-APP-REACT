import Header from './components/Header';
import Meme from './components/Meme';
import { useState } from 'react';
import './index.css';

function App() {
  const [firstname,setfirstname]= useState("");
  const handlefirstnamechange=(event)=>{
    setfirstname(event.target.value)
    
  }
  const [lastname,setlastname]= useState("");
  const handlelastnamechange=(event)=>{
    setlastname(event.target.value)
    
  }
  console.log(firstname+" "+lastname);
  return (
    // <div className="App">
    //   <Header/>
    //   <Meme/>
    // </div>
    <form>
      <input
      type="text"
      placeholder="enter some input"
      onChange={handlefirstnamechange} 
        />
        <input
      type="text"
      placeholder="enter some input"
      onChange={handlelastnamechange} 
        />
    </form>
  );
}
//Conditional rendering thorouly done
export default App;
