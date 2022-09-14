import React from "react";
import {NavLink } from "react-router-dom";
import { FaHeartbeat} from "react-icons/fa";
import { MdDashboard} from "react-icons/md";
import {FiCalendar} from "react-icons/fi";
import {BsFiles} from "react-icons/bs";
import {IoIosPersonAdd} from "react-icons/io";






function Nav (){
    return (
    <div className="Nav">
        <span><FaHeartbeat className='icon'/>E-AFYA</span>
        <div className="navlink">
            <NavLink
                className="link"
                // activeclassname="active"
                to="/home/dashboard"
            >
                <MdDashboard className="icon" />
                <h4>Dashboard</h4>
            </NavLink>

            <NavLink
                className="link"
                // activeclassname="active"
                to="/home/appointments"
            >
                <FiCalendar className="icon" />
                <h4>Appointments</h4>
            </NavLink>

            <NavLink
                className="link"
                // activeclassname="active"
                to="/home/patientrecords"
            >
                <BsFiles className="icon" />
                <h4>Patient Records</h4>
            </NavLink>

            <NavLink
                className="link"
                // activeclassname="active"
                to="/home/newpatient"
            >
                <IoIosPersonAdd className="icon" />
                <h4>Enroll Patient</h4>
            </NavLink>
    
        </div>
        
       
    </div>
    );
}
export default Nav;