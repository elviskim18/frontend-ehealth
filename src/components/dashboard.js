import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsBell} from "react-icons/bs";
import { RiDeleteBin5Line} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const logo = require('../images/img2.png')

const logedInfo =JSON.parse(localStorage.getItem("logedUser"))




function Dashboard ({patients}){
    
    const[countdoctors, setcountdoctors] = useState(0)
    const[countnurses, setcountnurses] = useState(0)
    const[countappointments, setcountappointments] = useState(0)
    const [notifications, setNotifications] = useState([]);
    // const [account ,setaccount] = useState({})
    const navigate = useNavigate()

    

     //handle logout
    function handleLogout(){
        localStorage.setItem("logedUser", JSON.stringify({
            name:"",
            email:"",
            password:""
        }))
        localStorage.setItem("authenticated", JSON.stringify(false))
        navigate("/login")
    }

         //delete notification
         function deleteNotification(id) {
            let update = patients.filter((pat) => pat.id !== id);
            setNotifications(update);
            axios.delete(`http://localhost:9292/removenotification/${id}`);
            alert("Notification deleted");
        }

   

    //useeffect
   
    useEffect(() =>{
        
        
        // setaccount(logedInfo)

        axios.get("http://localhost:9292/alldoctors")
        .then(resp => {
            setcountdoctors(resp.data)})


        axios.get("http://localhost:9292/nurses")
        .then(resp => setcountnurses(resp.data))
        
    
        axios.get(`http://localhost:9292/myappointments/${logedInfo?.id}`)
        .then(resp => {
            console.log(resp.data)
            // test = resp.data
            setcountappointments(resp.data)})

        

         //get notifications
        function getNotifications(id) {
            axios
            .get(`http://localhost:9292/mynotification/${id}`)
            .then((resp) => {
                const noti = resp.data;
                setNotifications(noti);
            });
        }

        getNotifications(logedInfo?.id);
        
  
    },[])
    


    return (
        <div className="dashboard">
            <div className="dleft">

                <div className="hcontainer">
                    <div className="circle"></div>

                    <h4>HEY,{logedInfo?.name}</h4>
                   
                    <div className="button">
                        <button onClick={handleLogout}>LOGOUT</button>
                    </div>
                </div>
                
                <h3>DASHBOARD</h3>
                <div className="stats">
                    <div className="stat1">
                        <h4>DOCTORS IN</h4>
                        <h4>{countdoctors}</h4>
                    </div>
                    <div className="stat2">
                        <h4>NURSES IN</h4>
                        <h4>{countnurses}</h4>
                    </div>
                    <div className="stat3">
                        <h4>APPOINTMENTS</h4>
                        <h4>{countappointments}</h4>
                    </div>
                    
                </div>
                <div className="notifications">
                    <h4><span><BsBell/></span> NOTIFICATIONS</h4>
                    <ul className="notes">
                        {notifications.map((notification) =>(
                            <li key={notification.id} >{notification.about}<em onClick={() => deleteNotification(notification.id) }><RiDeleteBin5Line/></em></li>
                        ))}
                        
        
                    </ul>

                </div>
            </div>
            <div className="dright">
                <img src={logo} alt='wewe' className="calimage"/>
            </div>
        </div>
      
    );
}
export default Dashboard;