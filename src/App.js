import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const [alert , setAlert] = useState(null);
  const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">

        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/my-app"
          element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/>
        </Routes>
        </div>
        </Router>

    </>
  );
}

export default App;
