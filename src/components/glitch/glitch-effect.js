export default function init(canvas, width, height) {
  const ctx = canvas.getContext('2d');
  const colors = [
    '#87CFB0',
    '#1C9963',
    '#6ed2dc',
    '#94FF94',
    '#FFD4FF',
    '#AF62CC',
    '#FFFFFF',
  ];

  canvas.width = width;
  canvas.height = height;

  ctx.globalAlpha = 0.2;
  function glitch() {
    window.requestAnimationFrame(glitch);

    ctx.fillStyle = '#1a191cCC';
    ctx.fillRect(0, 0, width, height);

    ctx.shadowBlur = 0;
    ctx.shadowColor = 'none';
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    for (let i = 0; i < 1000; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
      ctx.fillRect(
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height),
        Math.floor(Math.random() * 30) + 1,
        Math.floor(Math.random() * 30) + 1
      );

      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
      ctx.fillRect(
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height),
        Math.floor(Math.random() * 25) + 1,
        Math.floor(Math.random() * 25) + 1
      );
    }

    ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
    ctx.fillRect(
      Math.random() * width,
      Math.random() * height,
      Math.random() * width,
      Math.random() * height
    );
    ctx.setTransform(1, 0, 0, 0.8, 0.2, 0);
  }

  glitch();

  window.addEventListener('resize', () => {
    canvas.width = width;
    canvas.height = height;
  });
}
