function setup() {
  createCanvas(600, 600);
  background(255);
  drawEye("right");
  drawEye("left");
}

function draw() {}

function drawEye(side) {
  // draw eyes based on center
  translate(width / 2, height / 2);

  // calculate dimensions for each eye
  //
  //       ┌─────────────────────────── eyelidPeak
  //       │
  //       ▼          ├──────────┤◄──── palpebralFissureX
  // ⢀⣀⣤⣤⡖⠛⣭⡉⠓⣦⡀⠀├───┤⠀⠀⣠⢴⠒⠒⠒⠦⢄⡀⠀⠀┬
  // ⠙⣇⠀⠀⣷⡀⠛⠃⢀⡇⠙⢦ ⠀▲⠀⢀⡿⠟⠉⢿⠀⠿⠃⢀⡇⠈⣱⣦│◄─── palpebralFissureY
  // ⠀⠈⠳⣄⠀⠙⠓⠋⠉⣀⡔⠋⠀⠀│⠀⠀⠻⣦⡀⠘⠷⠦⠶⠋⢀⡴⠋⠀│
  // ⠀⠀⠀⠈⠓⠦⠤⠖⠚⠁⠀⠀⠀⠀│⠀⠀⠀⠀⠙⠷⣦⣤⣶⠞⠉⠀⠀⠀┴
  //               └─────────────────── innerCanthalDistance

  const innerCanthalDistance = width / 10;
  const centerOffset = innerCanthalDistance / 2;

  const palpebralFissureX = width * 0.37;
  const palpebralFissureY = width / 6;
  const yOffset = palpebralFissureY / 2;
  
	const eyelidPeak = palpebralFissureX * 0.48 + centerOffset;

  // calculate positions for each eye
  //
  // ┌───────── outer ──────────┐
  // │     ┌─── top ──────┐     │
  // │     ▼              ▼     │
  // ▼⣀⣤⣤⡖⠛⣭⡉⠓⣦⡀⠀⠀⠀⠀⠀⠀⠀⣠⢴⠒⠒⠒⠦⢄⡀⠀▼
  // ⠙⣇⠀⠀⣷⡀⠛⠃⢀⡇⠙⢦⠀⠀⠀⢀⡿⠟⠉⢿⠀⠿⠃⢀⡇⠈⣱⣦
  // ⠀⠈⠳⣄⠀⠙⠓⠋⠉⣀⡔⠋⠀⠀⠀⠀⠻⣦⡀⠘⠷⠦⠶⠋⢀⡴⠋⠀
  // ⠀⠀⠀⠈⠓⠦⠤⠖⠚⠁⠀▲⠀ ⠀▲⠀⠀⠙⠷⣦⣤⣶⠞⠉⠀⠀⠀
  //       ▲    └─┬─┘     ▲
  //       │    inner     │
  //       └─── bottom ───┘

  // note: sides are based off of the EYES' POV
  //   RIGHT              LEFT

  const leftEye = {
    inner: {
      x: centerOffset,
      y: 0,
    },
    top: {
      x: eyelidPeak,
      y: yOffset,
    },
    outer: {
      x: centerOffset + palpebralFissureX,
      y: 0,
    },
		bottom: {
			x: eyelidPeak,
			y: -1 * yOffset,
		}
  };
  beginShape();
  splineVertex(leftEye.inner.x, leftEye.inner.y);
  splineVertex(leftEye.top.x, leftEye.top.y);
  splineVertex(leftEye.outer.x, leftEye.outer.y);
  splineVertex(leftEye.bottom.x, leftEye.bottom.y);
  endShape(CLOSE);
}
