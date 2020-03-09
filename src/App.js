import React from 'react';
import './App.css';
import SoundPoint from './components/sound-point/SoundPoint';

function App() {
  return (
    <div className="App">
      <svg width={1000} height={1000}>
        <SoundPoint x={200} y={200} soundId="piano" />
        <SoundPoint x={20} y={10} soundId="LR_Pianos" />
        <SoundPoint x={900} y={900} soundId="arp" />
        <SoundPoint x={900} y={50} soundId="swells" />
        <SoundPoint x={30} y={900} soundId="synths" />
      </svg>
    </div>
  );
}

export default App;
