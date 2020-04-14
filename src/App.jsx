import React from 'react';
import styled from 'styled-components';
import Map from './components/map/Map';
import SoundLayer from './components/sound-layer/SoundLayer';
import GlitchLayer from './components/glitch/GlitchLayer';

const AppContainer = styled.div`
  text-align: center;
  background-color: #000;
`;

export default () => (
  <AppContainer>
    <Map />
    <GlitchLayer />
    <SoundLayer />
  </AppContainer>
);
