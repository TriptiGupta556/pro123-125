difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
    video=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized!');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        leftwristX=results[0].pose.leftwrist.x;
        rightwristX=results[0].pose.rightwrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
function draw(){
    background('#6C91C2');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    FileList('#FFE787');
    text('Peter' , 50, 400);
}
