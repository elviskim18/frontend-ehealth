import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const logo = require('../images/img5.png')




function Newpatient ({addPatient}){
    const [newInfo, setnewInfo] = useState({
        name: "",
        gender: "",
        telephone_number: "" ,
        date_of_birth: "",
        weight: "",
        bloodtype: "",
        symptoms: "",
        diagnosis:"",
        national_id:""
    })

    let navigate = useNavigate();

    //handlechange
    function handleChange (event){
        const name = event.target.name;
        let value = event.target.value;
        setnewInfo({
            ...newInfo,
            [name]:value
        })
    }

    //add patient
    function handleNew(event){
        event.preventDefault()
        addPatient(newInfo)
        // console.log("jn")
        alert("Patient Enrolled Successfully!")
        navigate("/home/patientrecords")
        
    }



    return (
        <div className="newrecord">
            <div className="header">
                <img src={logo} alt='wewe' className="age" /> 
                <h3>ENROLL NEW PATIENT</h3>
            </div>
            <form onSubmit={handleNew}>
                <input type="text" placeholder="Full Names" name="name" value={newInfo.name} onChange={handleChange}/>
                <input type="text" placeholder="Telephone Number" name="telephone_number" value={newInfo.telephone_number} onChange={handleChange}/>
                <input type="date"  name="date_of_birth" placeholder="date_of_birth" value={newInfo.date_of_birth} onChange={handleChange}/>
                <input type="number" placeholder="Weight" name="weight" value={newInfo.weight} onChange={handleChange} />
                <input type="number" placeholder="National Id" name="national_id" value={newInfo.national_id} onChange={handleChange} />
                <label>Gender
                    <select id="gender" name="gender" value={newInfo.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
               
                <label>Bloodtype
                    <select id="blood" name="bloodtype" value={newInfo.bloodtype} onChange={handleChange} >
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="ab">AB</option>
                        <option value="o">O</option>
                    </select>
                </label>
               
                <input type="text" placeholder="Symptoms" name="symptoms" className="large" value={newInfo.symptoms} onChange={handleChange}/>
                <input type="text" placeholder="Diagnosis" name="diagnosis" className="large" value={newInfo.diagnosis} onChange={handleChange}/>
                <input type="submit" value="ENROLL" className="submit"/>
            </form>
        </div>
        
      
    );
}
export default Newpatient;