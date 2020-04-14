import React from 'react';
import styled from 'styled-components';
import Map from './components/Map/Map';
import SoundLayer from './components/SoundLayer/SoundLayer';
import GlitchLayer from './components/Glitch/GlitchLayer';

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
