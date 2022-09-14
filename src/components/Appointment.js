// import React, { useContext } from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { FcCheckmark} from "react-icons/fc";
// import { account } from "./Main";

const logo = require('../images/img3.png')




function Appointment ({logedin}){
    const [appointments, setappointments] = useState([]);

    useEffect(() =>{
    
    //getappointments
    function getAppointments(id=1) {
        axios
          .get(`http://localhost:9292/allmyappointments/${id}`)
          .then((resp) => {
            const app = resp.data;
            setappointments(app);
          });
    }
    getAppointments(logedin?.id);
    // eslint-disable-next-line
    },
    [])
    
    return (
        <div className="appointment">
           <div className="header">
             <img src={logo} alt='wewe' className="age" /> 
             <h3>APPOINTMENTS</h3>
           </div>
           <div className="appoints">
               {appointments.map((appointment)=>(
                 <div className="notify">
                    <span>{appointment.time} <em>{appointment.date}</em></span>
                    <p><FcCheckmark/></p>
                </div>

               ))}
              

               {/* <div className="notify">
                   <span>Title  <em>Time</em></span>
                   <p><FcCheckmark/></p>
               </div>

               <div className="notify">
                   <span>Title  <em>Time</em></span>
                   <p><FcCheckmark/></p>
               </div> */}
               
           </div>


        </div>
      
    );
}
export default Appointment;