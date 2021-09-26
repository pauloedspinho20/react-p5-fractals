import Sketch from "react-p5";

function App() {

  const CRYSTAL_SIZE = 500
  const SIDES = 6
  let PALETTE = []

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

  const draw = (p5) => {
	  start(p5)
	}; 

  const start = (p5) => {
    let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
    const strokeColor = getRandomFromPalette()
    console.log(numShapes);
    console.log(strokeColor);
  
    p5.noFill()
    p5.stroke(PALETTE[0])
    p5.push()
      p5.translate(p5.width/2, p5.height/2)
      p5.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
      
      p5.stroke(strokeColor)
      const angle = 360 / numShapes
      for (let i = 0; i < numShapes; i++) {
        p5.line(0, 0, 0, CRYSTAL_SIZE / 2)  
        p5.rotate(angle)
      }
    p5.pop()
  }

  const randomSelectTwo = () => {
    const rand = Math.random(0, 1)
    console.log('rando', rand)

    if (rand > 0.5) {
      return true
    } else {
      return false
    }
  }
  
  const getRandomFromPalette = () => {
    const rand = Math.floor(Math.random(0, PALETTE.length))
    return PALETTE[rand]
  }

  return (
    <Sketch setup={setup} draw={draw} />
  );
}

export default App;
