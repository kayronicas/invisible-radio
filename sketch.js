let mic;
let osc;

function setup() {
  let cnv = createCanvas(400, 400);
  
  mic = new p5.AudioIn();
  mic.start();
  mic.amp(1.0);
  
  osc = new p5.Oscillator();
  osc.start();
  osc.amp(0.5);
  osc.freq(700);
}

function toggleMicrophone() {
  if (mic.enabled()) {
    mic.stop();
  } else {
    mic.start();
  }
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  fill(0);
  text('walkie talkie', width / 2, height / 2);
  
  let vol = mic.getLevel();
  
  let textSizeValue = map(vol, 0, 1, 10, 400);
  
  let minFreq = 150;
  let maxFreq = 2000;
  let oscFreq = map(vol, 0, 1, minFreq, maxFreq);
  
  osc.freq(oscFreq);
  
  textSize(textSizeValue);
  
}
