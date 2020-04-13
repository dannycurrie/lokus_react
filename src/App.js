import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import SoundLayer from './components/SoundLayer/SoundLayer';
import Stars from './components/stars/Stars';

function App() {
  return (
    <div className="App">
      <Stars />
      <Map />
      <SoundLayer />
    </div>
  );
}

export default App;
