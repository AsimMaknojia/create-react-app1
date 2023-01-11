import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar/Navbar';
// import logo from './logo.svg';
import './App.css';
import Homess from './Components/Pages/Homess';
// import Sectionone from './Components/Sectionone/Sectionone';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <routes>
     <Homess/>
     </routes>
     
     {/* <Sectionone/> */}
    </div>
  );
}

export default App;
