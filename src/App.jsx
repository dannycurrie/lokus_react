import React from 'react';
import styled from 'styled-components';
import Map from './components/map/Map';
import GlitchLayer from './components/glitch/GlitchLayer';

const AppContainer = styled.div`
  text-align: center;
  background-color: #000;
`;

export default () => (
  <AppContainer>
    <GlitchLayer />
    <Map />
  </AppContainer>
);
