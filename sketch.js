function draw() {}

class Eye {
  constructor(eyeSide) {
    let side = eyeSide === "right" ? -1 : 1;
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

    this.inner = {
      x: side * centerOffset,
      y: 0,
    };
    this.top = {
      x: side * eyelidPeak,
      y: yOffset,
    };
    this.outer = {
      x: side * (centerOffset + palpebralFissureX),
      y: 0,
    };
    this.bottom = {
      x: side * eyelidPeak,
      y: -1 * yOffset,
    };
  }

  see() {
    push();
    translate(width / 2, height / 2);
    beginShape();
    splineVertex(this.inner.x, this.inner.y);
    splineVertex(this.top.x, this.top.y);
    splineVertex(this.outer.x, this.outer.y);
    splineVertex(this.bottom.x, this.bottom.y);
    endShape(CLOSE);
    pop();
  }
}

function setup() {
  createCanvas(600, 600);
  background(255);
  let leftEye = new Eye("left");
  let rightEye = new Eye("right");
  leftEye.see();
  rightEye.see();
}
