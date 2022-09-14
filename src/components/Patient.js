import React from "react";




function Patient ({patient,setdata,setvisibility}) {
    function handle (){
        setvisibility((visibility) => !visibility)
        setdata(patient)
        console.log(patient)
        
    }
    return ( 
       
        <li key={patient.id} onClick={handle}>
           {patient.name}
        </li>
    )
  

}

export default Patient;