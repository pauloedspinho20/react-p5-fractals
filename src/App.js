import Sketch from "react-p5";

function App() {

  const CRYSTAL_SIZE = 500;
  const SIDES = 6;
  const MIN_STROKE_WEIGHT = 2;
  const MAX_STROKE_WEIGHT = 10;
  let PALETTE = [];

  // P5 SETUP
	const setup = (p5, canvasParentRef) => {
    p5.createCanvas(530, 530).parent(canvasParentRef);

    PALETTE = [
      p5.color(255, 52, 154), // pink
      p5.color(4, 0, 152) // blue
    ]
  
    p5.noLoop()
    p5.angleMode(p5.DEGREES)
    p5.rectMode(p5.CENTER)
	};

  // P5 DRAW
  const draw = (p5) => {
	  testLines(p5);
    outlineShape(p5);
	}; 


  // OULINE SHAPE
  const outlineShape = (p5) => {
    const strokeColor = getRandomFromPalette();
    const strokeWeight = getRandomNumber(MIN_STROKE_WEIGHT, MAX_STROKE_WEIGHT);
    const isHexagon = getRandomBoolean();

    p5.stroke(strokeColor);
    p5.strokeWeight(strokeWeight);
    p5.push();
    p5.translate(p5.width/2, p5.height/2);
    if (isHexagon) {
      hexagon(0, 0, CRYSTAL_SIZE / 2, p5);
    } 
    else {
      p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
    }
    p5.pop();
  }

  // TEST LINES
  const testLines = (p5) => {
    let numShapes = getRandomBoolean() ? SIDES : SIDES * 2;
    const strokeColor = getRandomFromPalette();
    const strokeWeight = getRandomNumber(MIN_STROKE_WEIGHT, MAX_STROKE_WEIGHT);

    p5.noFill();
    p5.stroke(PALETTE[0]);
    p5.strokeWeight(strokeWeight);
    p5.push();
    p5.translate(p5.width/2, p5.height/2);
    p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
    p5.stroke(strokeColor);
    const angle = 360 / numShapes;
    for (let i = 0; i < numShapes; i++) {
      p5.line(0, 0, 0, CRYSTAL_SIZE / 2);
      p5.rotate(angle);
    }
    p5.pop();
  }


  const pointOnCircle = (posX, posY, radius, angle, p5) => {
    const x = posX + radius * Math.cos(angle);
    const y = posY + radius * Math.sin(angle);
    return p5.createVector(x, y);
  };
  
  // GET HEXAGON SHAPE
  const hexagon = (posX, posY, radius, p5) => {
    const rotAngle = p5.TWO_PI / 6;
    p5.beginShape();
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle, p5);
        p5.vertex(thisVertex.x, thisVertex.y);
    }
    p5.endShape(p5.CLOSE);
  }

  // GET RANDOM NUMBER BETWEEN 0 AND 1
  const getRandomBoolean = () => {
    const rand = Math.random(0, 1)
    return (rand > 0.5 ? true : false) 
  }

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // GET RANDOM COLOR FROM PALETTE
  const getRandomFromPalette = () => {
    const rand = Math.floor(Math.random() * (PALETTE.length - 0));
    return PALETTE[rand]
  }

  return (
    <Sketch setup={setup} draw={draw} />
  );
}

export default App;
