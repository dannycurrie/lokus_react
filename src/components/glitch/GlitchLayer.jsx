import React, { useEffect } from './node_modules/react';
import styled from './node_modules/styled-components';
import glitch from './glitch-effect';
import { useRef } from './node_modules/react';

const GlitchLayer = styled.canvas`
  z-index: 999;
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
