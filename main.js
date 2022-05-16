noseY=0
noseX=0

function preload(){
clownnoseimg=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video, modelLoded);
poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0 ,0 ,300 ,300);
    image(clownnoseimg, noseX, noseY, 30, 30);
}

function takeSnapshot(){
    save('Filter.jpeg');
}

function modelLoded(){
    console.log("model is loded");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        noseX=results[0].pose.nose.x - 15;
        noseY=results[0].pose.nose.y - 3;
    }
}