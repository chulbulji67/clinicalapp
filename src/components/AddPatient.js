import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddPatient() {
  const [patientFirstName, setPatientFirstName] = useState('');
  const [patientLastName, setPatientLastName] = useState('');
  const [patientAge, setPatientAge] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    axios.post("http://localhost:8082/patients", {
      patientFirstName: patientFirstName,
      patientLastName: patientLastName,
      patientAge: patientAge
    })
    .then(res => {
      toast("Patient added successfully", { autoClose: 2000 });
      console.log("added")
      // Reset form fields after successful submission
      setPatientFirstName('');
      setPatientLastName('');
      setPatientAge('');
    })
    .catch(error => {
      console.error('Error adding patient:', error);
      toast.error("Failed to add patient");
    });
  }

  return (
    
    <div>
      <h2>Create Patient:</h2>
      <form onSubmit={handleSubmit}>
        First Name: <input type='text' value={patientFirstName} onChange={(event) => setPatientFirstName(event.target.value)} />
        Last Name: <input type='text' value={patientLastName} onChange={(event) => setPatientLastName(event.target.value)} />
        Age: <input type='text' value={patientAge} onChange={(event) => setPatientAge(event.target.value)} />
        <button type="submit">Confirm</button>
      </form>
    </div>
    
  );
}
