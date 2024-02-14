
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [patientData, setPatientData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/patients")
            .then(res => {
                setPatientData(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
    <div>
        <h2 style={{margin:"auto", marginLeft:"300px"}}>Patient</h2>
        <table style={{margin:"auto", border:"2px solid black"}}>
            <thead>
            <tr style={{border:"2px solid black"}}>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
                
                {patientData.map
                (patient =><tr key={patient.patientId}>
                    <td>{patient.patientId}</td>
                    <td>{patient.patientAge}</td>
                    <td>{patient.patientFirstName}</td>
                    <td>{patient.patientLastName}</td>
                    <td><Link to = {"/patientDetails/"+patient.patientId}>Add Data</Link></td>
                    <td><Link to = {"/analyze/"+patient.patientId}>Analyze</Link></td>
                    </tr> )}
            </tbody>
        </table>
        <Link to={"/addPatient"}> <font size="5"></font>Register Patient</Link>
    </div>
  )
}


