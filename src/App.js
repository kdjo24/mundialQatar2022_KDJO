import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import StartPage from "./components/StartPage";
import './components/estilo.css';
import Groups from "./components/Groups";
import Calendar from "./components/Calendar";
// ----------------------------------

function App() {
  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<StartPage/>} />
          <Route exact path="/grupos" element={<Groups/>} />
          <Route exact path="/calendario" element={<Calendar/>} />
        </Routes>
    </Router>
  );
}

export default App;
