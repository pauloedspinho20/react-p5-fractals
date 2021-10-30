import Sketch from 'react-p5';
import getRandomBoolean from './utils/getRandomBoolean';
import getRandomFromPalette from './utils/getRandomFromPalette';
import getRandomNumber from './utils/getRandomNumber';
import hexagon from './shapes/hexagon';

function App() {
  const CRYSTAL_SIZE = 500;
  const SIDES = 6;
  const MIN_STROKE_WEIGHT = 1;
  const MAX_STROKE_WEIGHT = 15;
  let PALETTE = [];

  // P5 SETUP
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(530, 530).parent(canvasParentRef);

    PALETTE = [
      p5.color(240, 101, 67), // orange soda
      p5.color(232, 233, 235), // platinium
      p5.color(224, 223, 213), // alabaster
      p5.color(49, 54, 56), // onyx
      p5.color(240, 157, 81), // sandy brown
    ];

    p5.noLoop();
    p5.angleMode(p5.DEGREES);
    p5.rectMode(p5.CENTER);
  };

  // SIMPLE LINES
  const simpleLines = (p5, active = false) => {
    if (active) {
      const stepsOut = 8;
      const numSteps = getRandomBoolean() ? stepsOut : Number(stepsOut * 1.25);
      const step = (CRYSTAL_SIZE / 2) / numSteps;
      const start = Math.floor(getRandomNumber(0, numSteps));
      const stop = Math.floor(getRandomNumber(start, numSteps + 1));

      const numShapes = getRandomBoolean() ? SIDES : SIDES * 2;
      const strokeColor = getRandomFromPalette(PALETTE);
      const strokeWeight = getRandomNumber(MIN_STROKE_WEIGHT, MAX_STROKE_WEIGHT);
      const angle = 360 / numShapes;

      p5.noFill();
      p5.stroke(strokeColor);
      p5.strokeWeight(strokeWeight);

      p5.push();
      p5.translate(p5.width / 2, p5.height / 2);
      for (let i = 0; i < numShapes; i++) {
        p5.line(start * step, 0, stop * step, 0);
        p5.rotate(angle);
      }
      p5.pop();
    }
  };

  // OULINE SHAPE
  const outlineShape = (p5, active = false) => {
    if (active) {
      const strokeColor = getRandomFromPalette(PALETTE);
      const strokeWeight = getRandomNumber(MIN_STROKE_WEIGHT, MAX_STROKE_WEIGHT);
      const isHexagon = getRandomBoolean();

      p5.stroke(strokeColor);
      p5.strokeWeight(strokeWeight);
      p5.push();
      p5.translate(p5.width / 2, p5.height / 2);
      if (isHexagon) {
        hexagon(0, 0, CRYSTAL_SIZE / 2, p5);
      }
      else {
        p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
      }
      p5.pop();
    }
  };

  // TEST LINES
  const testLines = (p5, active = false) => {
    if (active) {
      const numShapes = getRandomBoolean() ? SIDES : SIDES * 2;
      const strokeColor = getRandomFromPalette(PALETTE);
      const strokeWeight = getRandomNumber(MIN_STROKE_WEIGHT, MAX_STROKE_WEIGHT);

      p5.noFill();
      p5.strokeWeight(strokeWeight);
      p5.push();
      p5.translate(p5.width / 2, p5.height / 2);
      p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
      p5.stroke(strokeColor);
      const angle = 360 / numShapes;
      for (let i = 0; i < numShapes; i++) {
        p5.line(0, 0, 0, CRYSTAL_SIZE / 2);
        p5.rotate(angle);
      }
      p5.pop();
    }
  };

  const setObjects = p5 => {
    p5.clear();
    testLines(p5, true);
    simpleLines(p5, true);
    outlineShape(p5, true);
  };

  // P5 DRAW
  const draw = p5 => {
    setObjects(p5);
    setInterval(() => {
      setObjects(p5);
    }, 1000);
  };

  return (
    <Sketch setup={ setup } draw={ draw } />
  );
}

export default App;
