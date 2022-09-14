import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Appointment from "./Appointment";
import Dashboard from "./dashboard";
import Newpatient from "./Newpatient";
import PatientRecord from "./PatientRecord";
import axios from "axios";


function Display({logedin}) {
  
  const [patients, setPatients] = useState([]);
  
  
  const url = "https://e-health-backend.herokuapp.com/patients";

  //get patient records when page loads
  function getPatients() {
    axios.get(url).then((resp) => {
      const pat = resp.data;
      setPatients(pat);
    });
  }

  //search patient record
  function getSearch(str) {
    if (str === "") {
      getPatients();
    } else {
      const newP = patients.filter((pat) =>
        pat.name.toLowerCase().includes(str.toLowerCase())
      );
      setPatients(newP);
    }
  }

  //add new patient
  function addPatient(newUser) {
    axios.post("https://e-health-backend.herokuapp.com/newPatient", newUser);
    setPatients([...patients, newUser]);
  }

  //update
  const updatePatient = async(id,object) =>{
    try {
        await axios.patch(`https://e-health-backend.herokuapp.com/updatepatient/${id}`,object)
        .then((res)=> getPatients())
        // setpatients([...patients,object])
    }
    catch(error){
        console.error(error)
    }

  }

    //delete
    function deletePatient (id){
        let update = patients.filter((pat) => pat.id !== id)
        setPatients(update);
        axios.delete(`https://e-health-backend.herokuapp.com/deletepatient/${id}`)
        

    }

  

  useEffect(() => {

    getPatients();
    
  }, []);

  return (
    <div className="Display">
      <Routes>
        <Route
          path="/patientrecords"
          element={<PatientRecord patients={patients} getSearch={getSearch} updatePatient={updatePatient} deletePatient={deletePatient}/>}
        />

        <Route
          path="/newpatient"
          element={<Newpatient addPatient={addPatient} />}
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
        
              patients={patients}

            />
          }
        />

        <Route
          path="/appointments"
          element={<Appointment logedin={logedin} />}
        />
      </Routes>
    </div>
  );
}
export default Display;
