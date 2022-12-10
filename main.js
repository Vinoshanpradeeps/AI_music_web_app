enemy = "";
heat_waves = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;
checkSong1 = "";

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload(){
    enemy = loadSound("enemy.mp3");  
    heat_waves = loadSound("Heat Waves.mp3");
}
function draw(){
    image(video, 0, 0, 600, 500);

    checkSong1 = heat_waves.isPlaying();
    console.log(checkSong1);

    fill("#000000");
    stroke("#ff0000");

    if(scoreleftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        enemy.stop();
        if(checkSong1 == false){
            heat_waves.play();
            document.getElementById("song_name").innerHTML = "Song name: Heat Waves"
        }
    }
}
function modelLoaded(){
    console.log("Pose net is initialized.");
}
    function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist).

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist x = " + leftWristX + "left wrist y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x = " + rightWristX + "right wrist y = " + rightWristY);
    }
}
