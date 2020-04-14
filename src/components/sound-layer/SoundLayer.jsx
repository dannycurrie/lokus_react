import React from 'react';
import SoundPoint from '../sound-point/SoundPoint';
import styled from 'styled-components';
import { initialiseAudio } from '../../utils';

const Layer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  filter: blur(5px);
`;

const getRandomX = () => window.innerWidth * Math.random();
const getRandomY = () => window.innerHeight * Math.random();

const getSounds = () => ({
  piano: initialiseAudio('piano'),
  swells: initialiseAudio('swells'),
  synths: initialiseAudio('synths'),
  lrPianos: initialiseAudio('LR_Pianos'),
  arp: initialiseAudio('arp'),
});

const SoundLayer = () => {
  const sounds = getSounds();
  const { piano, swells, synths, lrPianos, arp } = sounds;
  Object.values(sounds).forEach((s) => s.play());
  return (
    <Layer width="100vw" height="100vh">
      <SoundPoint x={getRandomX()} y={getRandomY()} sound={piano} />
      <SoundPoint x={getRandomX()} y={getRandomY()} sound={lrPianos} />
      <SoundPoint x={getRandomX()} y={getRandomY()} sound={arp} />
      <SoundPoint x={getRandomX()} y={getRandomY()} sound={swells} />
      <SoundPoint x={getRandomX()} y={getRandomY()} sound={synths} />
    </Layer>
  );
};

export default SoundLayer;
