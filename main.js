function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(50,110);

    canvas = createCanvas(550,550);
    canvas.position(950,110);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded (){
    console.log("PoseNet is Initiallized!");
}

function draw(){
    background('#969A97');
}

function gotPoses(results){
  if (results.length>0)
  {
    console.log(results);
  }
}