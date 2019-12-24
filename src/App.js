import React from 'react';
import './App.css';
import SoundPoint from './components/sound-point/SoundPoint';

function App() {
  return (
    <div className="App">
      <svg width={1000} height={1000}>
        <SoundPoint x={500} y={300} />
      </svg>
    </div>
  );
}

export default App;
