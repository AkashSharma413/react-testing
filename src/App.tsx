import React from 'react';
import Application from './components/application/application';
import Skills from './components/skills/skills';
import Counter from './components/counter/counter';
import './App.css';

function App() {
  const skills = ["html", "css", "javascript", "typescript"];
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
