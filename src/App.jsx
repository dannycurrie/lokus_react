import React from 'react';
import styled from 'styled-components';
import Map from './components/map/Map';

const AppContainer = styled.div`
  text-align: center;
  background-color: #000;
`;

export default () => (
  <AppContainer>
    <Map />
  </AppContainer>
);
