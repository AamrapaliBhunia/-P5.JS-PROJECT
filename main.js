function preload(){
}

function setup(){
    canvas = createCanvas(570,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw (){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill(255,0,0);
    stroke(255,0,0);
    circle(30,40,50);

    fill(255,255,0);
    stroke(255,255,0);
    rect(55,30,477,20);

    fill(255,0,0);
    stroke(255,0,0);
    circle(30,450,50);

    fill(255,255,0);
    stroke(255,255,0);
    rect(54,440,477,20);

    
    fill(255,0,0);
    stroke(255,0,0);
    circle(540,450,50);

    fill(255,0,0);
    stroke(255,0,0);
    circle(540,40,50);

    fill(255,255,0);
    stroke(255,255,0);
    rect(20,65,20,360);

    fill(255,255,0);
    stroke(255,255,0);
    rect(530,65,20,360);

}

function take_snapshot(){
    Save('Aamrapali.png');

}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}