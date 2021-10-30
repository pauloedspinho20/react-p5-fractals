import getRandomFromPalette from '../utils/getRandomFromPalette';

const Circle = (p5, sides, crystalSize, palette) => {
  const numShapes = sides;
  const angle = 360 / numShapes;
  const shapeSize = (crystalSize / 2) * 0.93;
  const position = (crystalSize / 2) - (shapeSize / 2);
  const strokeColor = getRandomFromPalette(palette);

  p5.stroke(strokeColor);
  p5.strokeWeight(1);
  p5.push();
  p5.translate(p5.width / 2, p5.height / 2);
  for (let i = 0; i <= numShapes; i++) {
    p5.ellipse(position, 0, shapeSize, shapeSize);
    p5.rotate(angle);
  }
  p5.pop();
};
export default Circle;
