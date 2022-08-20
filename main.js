song = "";
song2 = "";
function preload(){
     song = loadSound("enemy.mp3");
     song2 = loadSound("Heat Waves.mp3");
}
function setup{
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
}