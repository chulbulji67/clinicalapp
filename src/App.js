import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Switch } from "react-router-dom";


import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import Analyzedata from './components/Analyzedata';
function App() {
  return (
    
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addPatient">Add Patinet</Link>
          </li>
          <li>
            <Link to="/contact">ChartData</Link>
          </li>
          <li>
            <Link to="/patientDetails/1">Show Patient</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/addPatient" element={<AddPatient />} />
        <Route path="/contact" element={<Analyzedata />} />
        <Route path="/patientDetails/:id" element={<CollectClinicals />} />

      </Routes>
    </div>
 
  );
}

export default App;
