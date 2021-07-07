function preload() {

}
function setup(){
canvas=createCanvas(500,500);
canvas.position(120,150);
video=createCapture(VIDEO);
video.hide();
    }
function draw() {
  image(video,0,0,500,490);
}

function take_snapshot(){
    save("captured.png");
}