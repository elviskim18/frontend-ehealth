import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



function Signin (){
    const navigate = useNavigate()
    const [formdata, setformdata] = useState({
        email:"",
        password:""
      })

    function handleChange(e){
      const key = e.target.id
      const value = e.target.value
      setformdata({
        ...formdata,[key]:value
      })
    }
    //fetch doctor credentials
    function handleLogin (e){
        axios.post("http://localhost:9292/login",formdata)
        .then(resp => {
          console.log(resp.data)
          if (Object.values(resp.data).length > 1){
            alert("Login succesfully")
            localStorage.setItem("logedUser", JSON.stringify(resp.data));
            localStorage.setItem("authenticated", JSON.stringify(true));
            navigate("/home/dashboard")
           
          }
          else{
            alert("Username or Password incorrect!")
            setformdata({
                email:"",
                password:""
            })
          }
          
          
        })
        e.preventDefault()
        
      }





    return (
        <>
         <h2>DOCTOR LOGIN</h2>
         <form onSubmit={handleLogin}>
            <label for="username">Username:</label>
            <input type="email" id="email" name="email" onChange={handleChange}  value={formdata.email}/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handleChange} value={formdata.password}/>
            <button className="submit" >Login</button>
        </form> 
        <h4>OR</h4>
        <p onClick={()=>navigate('signup')}>Register</p>
        </>
       
      
      
    )
}

export default Signin