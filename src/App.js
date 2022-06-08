import Header from './components/Header';
import Meme from './components/Meme';
import { useState } from 'react';
import './index.css';

function App() {
  const [formdata,setformdata]= useState({
    firstname:"",
    lastname:"",
    email:"",
    comment:""
  });
  const handleChange=(event)=>{
    setformdata(prevdata=>{
      return{
        ...prevdata,
        [event.target.name]:event.target.value
      }
    })
    
  }
  console.log(formdata);
  
  return (
    // <div className="App">
    //   <Header/>
    //   <Meme/>
    // </div>
    <form>
      <input
      type="text"
      placeholder="enter some input"
      name='firstname'
      onChange={handleChange} 
      value={formdata.firstname}
        />
        <input
      type="text"
      name='lastname'
      placeholder="enter some input"
      onChange={handleChange} 
      value={formdata.lastname}
        />
        <input
      type="email"
      name='email'
      placeholder="enter some input"
      onChange={handleChange}
      value={formdata.email} 
        />
        <textarea onChange={handleChange} name='comment' value={formdata.comment} />
    </form>
  );
}
//Conditional rendering thorouly done
export default App;
