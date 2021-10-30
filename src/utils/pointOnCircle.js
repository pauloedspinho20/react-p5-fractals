const pointOnCircle = (posX, posY, radius, angle, p5) => {
  const posXradius = posX + radius;
  const posYradius = posY + radius;
  const x = posXradius * Math.cos(angle);
  const y = posYradius * Math.sin(angle);
  return p5.createVector(x, y);
};

export default pointOnCircle;
