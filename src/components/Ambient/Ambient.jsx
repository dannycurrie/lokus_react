import React, { useEffect } from 'react';
import particles from './particals';

const Ambient = () => {
  const canvasRef = React.useRef(null);
  useEffect(() => particles('ambient'), []);
  return (
    <canvas
      ref={canvasRef}
      id="ambient"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default Ambient;
