import Header from "./components/Header";
import Meme from "./components/Meme";
import { useState } from "react";
import "./index.css";

function App() {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isJoinedNewsletter: false,
  });

  const handlechange = (e) => {
    const {name,value,checked,type}=e.target;
    setformdata(prevdata=>{
      return{
        ...prevdata,
        [name]:type==="checkbox"? checked:value
      }
    })
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(formdata.password===formdata.confirmPassword){
      console.log("signed up successfully")
      if(formdata.isJoinedNewsletter===true){
        console.log("Thanks for signing up to our newsletter")
      }
    }else{
      console.log("passwords does not match")
    }
    
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          onChange={handlechange}
        />

        <div className="form--marketing">
          <input 
          id="okayToEmail"
          type="checkbox"
          name="isJoinedNewsletter"
          checked={formdata.isJoinedNewsletter} 
          onChange={handlechange} />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
//Conditional rendering thorouly done
export default App;
