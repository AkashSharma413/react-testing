import React from 'react';
import Application from './components/application/application';
import Skills from './components/skills/skills';
import './App.css';

function App() {
  const skills = ["html", "css", "javascript", "typescript"];
  return (
    <div className="App">
      <Skills skills={skills} />
    </div>
  );
}

export default App;
