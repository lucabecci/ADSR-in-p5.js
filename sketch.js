let wave;
let button;
let playing = false;

let env;

function setup() {
  createCanvas(400, 400);

  env = new p5.Env();
  env.setADSR(0.25, 0.4, 0.24, 1);
  env.setRange(1.2, 0);

  wave = new p5.Oscillator();

  wave.setType('sine');
  wave.start();
  wave.freq(440);
  wave.amp(env);

  button = createButton('play');
  button.mousePressed(() => {
    env.play();
  });
}

function draw() {
  background(0)
  text('Listen to short sound', height/2 -150, width/2);
    fill(255);
    textSize(25)
}