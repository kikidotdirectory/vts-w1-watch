function setup() {
  createCanvas(600, 600);
  background(255);
  drawEye("right");
  drawEye("left");
}

function draw() {}

function drawEye(side) {
  translate(width / 2, height / 2);
  // if reverse is true, set width to be negative to invert drawing
  let drawDirection = side === "right" ? width : width * -1;

	//       ┌───────────────────────────── eyelidPeak
	//       │
  //       ▼            ├──────────┤◄──── palpebralFissureX
  // ⢀⣀⣤⣤⡖⠛⣭⡉⠓⣦⡀⠀├─────┤⠀⠀⣠⢴⠒⠒⠒⠦⢄⡀⠀⠀┬
  // ⠙⣇⠀⠀⣷⡀⠛⠃⢀⡇⠙⢦  ⠀▲⠀ ⢀⡿⠟⠉⢿⠀⠿⠃⢀⡇⠈⣱⣦│◄─── palpebralFissureY
  // ⠀⠈⠳⣄⠀⠙⠓⠋⠉⣀⡔⠋⠀⠀⠀│⠀⠀⠀⠻⣦⡀⠘⠷⠦⠶⠋⢀⡴⠋⠀│
  // ⠀⠀⠀⠈⠓⠦⠤⠖⠚⠁⠀⠀⠀⠀⠀│⠀⠀⠀⠀⠀⠙⠷⣦⣤⣶⠞⠉⠀⠀⠀┴
	//                └──────────────────── innerCanthalDistance
  const innerCanthalDistance = width / 10;
  const palpebralFissureY = width / 6;
  const palpebralFissureX = width * 0.37;
  const eyelidPeak = palpebralFissureX * 0.48;
  // eyeHeight 100
  // eyeWidth  210
  // eyeAspectRatio 10/21
  // eyeCenter .48
  beginShape();
  splineVertex(innerCanthalDistance / 2, 0);
  splineVertex(eyelidPeak, palpebralFissureY / 2);
  splineVertex(palpebralFissureX, 0);
  splineVertex(eyelidPeak, (-1 * palpebralFissureY) / 2);
  endShape(CLOSE);
}
