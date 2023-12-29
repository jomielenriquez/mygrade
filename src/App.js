// App.js
import React from 'react';
import GradeLookup from './GradeLookup';
import './App.css';

const App = () => {
  return (
    <div className={"holder"}>
      <h1>Student Grade Lookup</h1>
      <GradeLookup />
    </div>
  );
};

export default App;
