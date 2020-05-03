import React from 'react';
import styled from 'styled-components';
import { getCurrentPoint } from '../../selectors';
import { connect } from 'react-redux';

const DataView = styled.div`
  position: absolute;
  margin: 0;
  overflow: hidden;
  width: 400px;
  height: 100%;
  opacity: 0.8;
  text-align: left;
  padding-top: 30px;
  padding-left: 30px;
`;

const Label = styled.p`
  color: #87cfb0;
`;

const mstp = (state) => ({
  point: getCurrentPoint(state),
});

export default connect(mstp)(({ soundPoints, point }) => {
  return (
    <DataView>
      <Label>{point.lat.toFixed(5)}</Label>
      <Label>{point.long.toFixed(5)}</Label>

      {Object.keys(soundPoints).map((key) => (
        <Label>
          {key}: {soundPoints[key].volume().toFixed(3)}
        </Label>
      ))}
    </DataView>
  );
});
