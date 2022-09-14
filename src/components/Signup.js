import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';





function Signup() {
    const navigate = useNavigate()
    const [formdata, setformdata] = useState({
      name:"",
      email:"",
      password:""
    })

    //handlechange
    function handleChange(e){
      const key = e.target.id
      const value = e.target.value
      setformdata({
        ...formdata,[key]:value
      })

    }

    //fetch doctor credentials
    function handleSubmit (e){
      axios.post("http://localhost:9292/register",formdata)
      .then(resp => {
        console.log(resp.data)
        if (Object.values(resp.data).length > 1){
          alert("User registered succesfully")
        }
        else{
          alert("User already exists")
        }
        
        
      })
      e.preventDefault()
      console.log(formdata)
    }
  return (
    <>
         <h2>DOCTOR REGISTER</h2>
         <form onSubmit={handleSubmit}>
            <label for="username">Name:</label>
            <input type="text" id="name" name="name" required value={formdata.name} onChange={handleChange}/>
            <label for="username">Username:</label>
            <input type="email" id="email" name="email" required value={formdata.email} onChange={handleChange}/>
            <label for="password">Password:</label>
            <input type="password" id="password"  required name="password" value={formdata.password} onChange={handleChange}/>
      
            <button className="submit">CREATE ACCOUNT</button>
        </form> 
        <h4>OR</h4>
        <p onClick={()=>navigate('/login')}>lOGIN</p>
        </>
  );
}

export default Signup;
