import React from 'react';
import SoundPoint from '../sound-point/SoundPoint';
import styled from 'styled-components';

const Layer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  filter: blur(5px);
`;

const getRandomX = () => window.innerWidth * Math.random();
const getRandomY = () => window.innerHeight * Math.random();

const SoundLayer = () => (
  <Layer width="100vw" height="100vh">
    <SoundPoint x={getRandomX()} y={getRandomY()} soundId="piano" />
    <SoundPoint x={getRandomX()} y={getRandomY()} soundId="LR_Pianos" />
    <SoundPoint x={getRandomX()} y={getRandomY()} soundId="arp" />
    <SoundPoint x={getRandomX()} y={getRandomY()} soundId="swells" />
    <SoundPoint x={getRandomX()} y={getRandomY()} soundId="synths" />
  </Layer>
);

export default SoundLayer;
