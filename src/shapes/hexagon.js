import pointOnCircle from '../utils/pointOnCircle';

// GET HEXAGON SHAPE
const Hexagon = (posX, posY, radius, p5) => {
  const rotAngle = p5.TWO_PI / 6;
  p5.beginShape();
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle, p5);
    p5.vertex(thisVertex.x, thisVertex.y);
  }
  p5.endShape(p5.CLOSE);
};

export default Hexagon;
