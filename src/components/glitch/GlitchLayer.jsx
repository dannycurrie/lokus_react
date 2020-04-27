import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import glitch from './glitch-effect';

const GlitchLayer = styled.canvas`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: none;
  opacity: 0.6;
  filter: blur(3px);
`;

export default () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      glitch(canvasRef.current, window.innerWidth, window.innerHeight);
    }
  }, []);
  return <GlitchLayer ref={canvasRef} id="canvas" />;
};
