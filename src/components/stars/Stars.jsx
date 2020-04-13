import React, { useEffect } from 'react';
import styled from 'styled-components';
import starsRaw from './raw';
import { useRef } from 'react';

const StarsLayer = styled.canvas`
  z-index: 9999;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: none;
  background: black;
  background: linear-gradient(to bottom, #000000 0%, #5788fe 100%);
  opacity: 0.3;

  .filter {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fe5757;
    animation: colorChange 30s ease-in-out infinite;
    animation-fill-mode: both;
    mix-blend-mode: overlay;
  }

  @keyframes colorChange {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 0.9;
    }
  }
`;

export default () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      starsRaw(canvasRef.current);
    }
  }, []);
  return <StarsLayer ref={canvasRef} id="canvas" />;
};
