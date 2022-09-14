import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";

import Patient from "./Patient";



const logo = require('../images/img4.png')




function PatientRecord ({patients, getSearch, updatePatient, deletePatient }){
    const [searchvalue, setsearchvalue] = useState("")
    const [data, setdata] = useState({})
    const [view ,setview] = useState(false)
    const [visibility ,setvisibility] = useState(true)
    // let navigate = useNavigate()
    
   

    //search
    function handlesearch(e) {
        e.preventDefault()
        setsearchvalue(e.target.value)
        const search = e.target.value
        getSearch(search)
    }
    

    //handlechange
    function handleChange(event){
        const key = event.target.name;
        const value = event.target.value;
        setdata({...data, [key]:value})
    
    }
     //handleupdate
    function handleEdit (e){
        e.preventDefault()
        console.log(data)
        updatePatient(data.id,data)
        alert("User successfully Edited!")
        // navigate("/home/dashboard")
        setvisibility((visibility) => !visibility)
    }

      //handle delete
      function handleDelete (){
        deletePatient(data.id)
        alert("User deleted Successfully")
        setdata("")
        setvisibility((visibility) => !visibility)
      }



    return (
        <div className="patientrecord">

            <div className="header">
             <img src={logo} alt='wewe' className="age" /> 
             <h3>PATIENT RECORDS</h3>
           </div>

           <form>
               <input type="text" placeholder="Search.." name="search" onChange={handlesearch} value={searchvalue}/>
               {/* <button type="submit"><FcSearch/></button> */}
            </form>
            
            <div className="cont">
                <ul className="records">
                    {patients?.map((patient)=> (
                        <Patient  key={patient.id} patient={patient} setdata={setdata} setvisibility={setvisibility}/>
                        

                    ))}
                </ul>
                <div className="disp" style={visibility? {display:"none"} : {display:"block"}}>

                    <h3>{data.name}</h3>
                    <p>GENDER:  {data.gender}</p>
                    <p>DATE OF BIRTH: {data.date_of_birth}</p>
                    <p>TELEPHONE NUMBER: {data.telephone_number}</p>
                    <p>WEIGHT: {data.weight}</p>
                    <p>NATIONAL ID: {data.national_id}</p>
                    <p>BLOODGROUP : {data.bloodtype}</p>
                    <p>SYMPTOMS: {data.symptoms}</p>
                    <p>DIAGNOSIS: {data.diagnosis}</p>
                    
                    <button onClick={() =>{
                        setview((view) => !view)
                        
                        } }>UPDATE</button>
                    <button onClick={handleDelete}>DELETE</button>

                    <form style={view? {display:"block"} : {display: "none"}}  onSubmit={handleEdit}>
                        <div className="styleform">
    
                            <label>NAME
                            <input value={data.name} type="text" name="name" onChange={handleChange}/>
                            </label>
                            <label>GENDER
                            <input value={data.gender} type="text" name="gender" onChange={handleChange}/>
                            </label>
                            <label>TELEPHONE NUMBER
                                <input value={data.telephone_number} type="text" name="telephone_number" onChange={handleChange}/>
                            </label>
                            <label>NATIONAL ID
                                <input value={data.national_id} type="text" name="national_id" onChange={handleChange}/>
                            </label>
                            <label>DOB
                                <input value={data.date_of_birth} type="date" name="date_of_birth" onChange={handleChange}/>
                            </label>
                            <label>WEIGHT
                                <input value={data.weight} type="text" name="weight" onChange={handleChange} />
                            </label>
                            <label>BLOODGROUP
                                <input value={data.bloodtype} type="text" name="bloodtype" onChange={handleChange}/>
                            </label>
                            <label>SYMPTOMS
                                <input value={data.symptoms} type="text" name="symptoms" onChange={handleChange}/>
                            </label>
                            <label>DIAGNOSIS
                                <input value={data.diagnosis} type="text" name="diagnosis" onChange={handleChange}/>
                            </label>
                            
                            <button >EDIT</button>

                        </div>
                        
                    </form> 
                
               
                </div>


            </div>
            
           
            
        </div>
      
    );
}
export default PatientRecord;