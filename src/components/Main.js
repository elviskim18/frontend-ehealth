import Nav from './Nav';
import Display from './Display';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const account = createContext({})
function Main () {
  const[logedin, setlogedin] = useState({})
  const [authenticated, setauthenticated] = useState(false)

   //useeffect
   useEffect(() =>{
    const auth =JSON.parse(localStorage.getItem("authenticated"))
    setauthenticated(auth)

    const logedInfo =JSON.parse(localStorage.getItem("logedUser"))
    setlogedin(logedInfo)
    
    },[])

    const navigate = useNavigate()

    if (!authenticated){
      navigate("/login")
    }



    return(
    <account.Provider value={logedin}>
      <div className="Main">
        <Nav/>
        <Display logedin={logedin}/>
      </div>
    </account.Provider>
    )
}

export default Main;