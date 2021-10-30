const pointOnCircle = (posX, posY, radius, angle, p5) => {
  const x = posX + (radius * Math.cos(angle));
  const y = posY + (radius * Math.sin(angle));
  return p5.createVector(x, y);
};

export default pointOnCircle;
