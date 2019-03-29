var myRed;
var myGreene;
var myBlue;
var x;
var y;
var points=8;
var pointAngle=360/points;//angle bwteen points
var radius=150;
var ferriswheel;
var beta=0.0
var img;
var song;
var bigben;
var payphone;
var a;
var b;
var car;
var p=0;
var q=0;
var speed=5;
var k;
var w;
var sign;
var grass;
var london;
var sec;
var min;
var hr;
var cloud;
var d=100;
var f=0;
var sunshine;

function preload() {
  mySound = loadSound('BGM.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
rectMode(CENTER);
ellipseMode(CENTER);
	 mySound.setVolume(0.1);
  mySound.play();
		
}

function draw(){
	ferriswheel();
	frameRate(5);
	bigben();
	payphone();
	car();
	sign();
	grass();
	london();
	cloud();
	let hr=hour();
	let min=minute();
	let sec=second();
	strokeWeight(8);
	noFill();
	sunshine(-50,-230,60);

	

	translate(800,10);
	
	stroke(101,102,106);
	let secondAngle=map(sec,0,60,360,0);
	
	stroke(101,102,106);
	let minuteAngle=map(min,0,60,360,0);
	
	stroke(101,102,106);
	let hourAngle=map(hr%12,0,12,0,360);
	strokeWeight(5);
	push();
	rotate(secondAngle);
	stroke(101,102,106);
	line(0,0,40,0);
	pop();
	
	push();
	rotate(minuteAngle);
	stroke(101,102,106);
	line(0,0,30,0);
	pop();
	
	push();
	rotate(hourAngle);
	stroke(101,102,106);
	line(0,0,20,0);
	pop();
	
}

	function ferriswheel(){
		background(245,229,207);
	//ferris wheel
	var myRed=random(170,230);
	var myGreene=random(40,80);
	var myBlue=random(40,80);
	noStroke();	
	fill(myRed,myGreene,myBlue);
	//bottom
	rect(300,550,200,10);
	//left
	quad(210,550,220,550,300,300,290,300);
	//right
	quad(390,550,380,550,300,300,310,300);
	//central
	ellipse(300,300,50,50);
	//bigger
	noFill();
	stroke(60,61,67);
	strokeWeight(8);
	ellipse(300,300,100,100);
	strokeWeight(10);
	stroke(myRed,myGreene,myBlue);
	ellipse(300,300,250,250);
		translate(300,300);
		strokeWeight(5);
		push();
		rotate(beta);
	for (var angle=300;angle<630;angle=angle+pointAngle){
	var x=cos(radians(angle))*radius;
		var y=sin(radians(angle))*radius;
		line(x,y,0,0);
			arc(x,y,30,30,0,PI,CHORD);
		push();
		stroke(60,61,67);
		arc(x,y,30,30,PI,0);
		pop();
	}
		beta+=3;
		pop();
		for (var angle=270;angle<630;angle=angle+pointAngle){
	var x=cos(radians(angle))*(radius-25);
		var y=sin(radians(angle))*(radius-25);
			push();
			strokeWeight(3);
		 stroke(random(200,260),random(200,240),random(200,230));
			fill(random(200,260),random(200,240),random(200,230));
			ellipse(x,y,10,10);
			pop();
		}
		
	}

function bigben(){
	noStroke();
	fill(187,131,82);
	rect(800,250,120,30);
	rect(800,150,100,170);
	for (var i=760;i<850;i+=20){
		fill(159,105,69);//stripe
		rect(i,150,10,170);
	}
	//clock
	fill(187,131,82);
	rect (800,10,120,120);
	
		fill(213,206,196);
	ellipse(800,10,100,100);
	//
	fill(187,131,82);
	rect(800,-65,90,30);
	//
	fill(74,80,76);
	quad(775,-120,825,-120,845,-80,755,-80);
	fill(187,131,82);
	rect(800,-135,50,30);
	//
	fill(74,80,76);
	triangle(800,-230,775,-150,825,-150);
	fill(200,165,77);
	quad(800,-230,795,-235,800,-240,805,-235);
	stroke(74,80,76);
}

function payphone(){
	noStroke();
	fill(204,17,29);
rect(550,180,100,170);
	fill(236,235,227);
	rect(550,180,65,135);
	for( var a= 510;a<583;a+=20){
		fill(204,17,29);
	rect(a,180,5,135);
	}
	for(var b=112;b<248;b+=23){
	fill(204,17,29);
		rect(550,b,65,5);
	}
	quad(510,55,590,55,600,75,500,75);
	strokeWeight(2);
	stroke(0);
	line(502,94,502,78);
	line(598,94,598,78);
	noStroke();
	textSize(15);
 text('TELEPHONE',506,90);
}
	
	function car(){
	if (p<1000 && p>-100){
	}
	else{
	speed*=-1;
}
	q=sin(frameCount)*2
		p+=speed;
		rect(p,q+350,140,70);
		for(var k=(p-55);k<(p+60);k+=25){
			fill(230);
		rect(k,(q+335),18,18);	
			rect(k,(q+365),18,18);
		}
		fill(10);
		ellipse((p-40),(q+390),30,30);
		ellipse((p+40),(q+390),30,30);
}

		function sign(){
			fill(10);
			triangle(380,245,410,255,350,255);
		rect(380,170,5,150);
			noFill();
			stroke(204,17,29);
			strokeWeight(15);
			ellipse(380,55,80,80);
			noStroke();
			fill(24,41,92);
			rect(380,55,110,25);
			textSize(13);
			fill(255);
			text('UNDERGROUND',330,57);
		}
function grass(){
	
	fill(107,147,68);
	arc(-80,260,100,90,PI,0);
	fill(103,139,50);
arc(-140,260,60,50,PI,0);
	
	fill(103,139,50);
arc(100,260,100,90,PI,0);
	fill(107,147,68);
	arc(200,260,130,120,PI,0);
	fill(59,113,44);
	arc(140,260,60,50,PI,0);
	//
	fill(103,139,50);
arc(470,265,90,80,PI,0);
fill(59,113,44);
	arc(430,265,60,55,PI,0);
	//
	fill(103,139,50);
arc(700,265,110,100,PI,0);
	fill(107,147,68);
	arc(750,265,50,46,PI,0);
}

function london(){
	push();
	colorMode(HSB);
	fill(frameCount/mouseX,random(100,200),random(50,100),0.5);
	textSize(100);
	textFont('Avenir');
	text('L',200,-50);
	textSize(80);
	text('ONDON',260,-50);
	textStyle(BOLD);
	pop();
}

function sunshine(posx,posy,diameter){

	fill(226,96,14,80);
ellipse(posx,posy,diameter,diameter);
	fill(226,96,14,50);
	ellipse(posx,posy,diameter+30,diameter+30);
}

function cloud(){
	push();
	colorMode(HSB);
	fill(200,30,40,1);
	ellipse(d,-200,30,30);
		ellipse(d+30,-200,60,60);
		ellipse(d+70,-200,60,60);
		ellipse(d+100,-200,30,30);
	
	ellipse(d+400,-200,30,30);
		ellipse(d+430,-200,60,60);
		ellipse(d+470,-200,60,60);
		ellipse(d+500,-200,30,30);
	
	
	
	if (d<600 && d>-100){
	}
	else{
	speed*=-1;
}
	f=sin(frameCount)*2;
		d+=speed/4;
pop();
	
	
}