import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function CollectClinicals() {

  let { id } = useParams();

  const [patient, setPatient] = useState(null);

  useEffect(()=>{
    console.log("UseEffect Running")
    axios.get(`http://localhost:8082/patients/${id}`)
    .then(res =>{
      console.log(res.data);
      setPatient(res.data);
    })
  },[id])


  return (
    <div>
      <h2>Patient Details</h2>
      {patient && (
        <div>
          <p>Patient ID: {patient.patientId}</p>
          <p>Patient First Name:{patient.patientAge}</p>
          <p>Patient Last Name: {patient.patientFirstName}</p>
          <p>Patient Age: {patient.patientLastName}</p>
          <h3>Clinical Data List</h3>
          <ul>
  {patient.clinicalDataList.map((data, index) => (
    <li key={index}>
      Clinical ID: {data.clinicalId}, 
      Component Name: {data.componentName}, 
      Component Value: {data.componentValue}, 
      Measured Date Time: {data.measuredDateTime}
    </li>
  ))}
</ul>
        </div>
      )}
    </div>
  )
}
