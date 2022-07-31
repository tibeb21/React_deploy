import React from 'react'
import myphoto from './photos/tibeb.jpg'
import './App.css';
function App() {
  return (
    <div className="App">
      <h1> My First React App</h1>
      <h3> Auther: Tibeb</h3>
      <img src={myphoto} alt="profile-photos"  />
    </div>
  );
}

export default App;
