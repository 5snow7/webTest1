let can,p1;
let p, c,par1;
let par,par2;
let t,r=50;


function setup() {
  start();
  can = createCanvas(400, 400);
  can.position(350, 80);can.class("can1");
  p1=select("#p1");
  p1.position(800,400);
  t=new logo(100,200,0);
  p = new part(100, 100);
  //can.mousePressed(chcolor);
  par = createP("now changing locally branch1");
  par.position(30, 400);
par1=createP("a new test of change in branch1");
  par1.position(50,220);
  par1.class("decor1");
  par2=createP("a 2cd test branching");
  par2.position(450,420);par2.class("decor1");
}
let x3 = 0;
let y3 = 0;
let an = 0;
let col=50;
function draw() {
  background(200, 0, 0);fill(col,0,0);
  col+=1;
  if(col>250){col=50;}

  ellipse(50,50,200,100);
t.fd(200);t.lt(60);
t.bk(300);
  fill(0, 0, 250);
  line(10, 10, 300, 200)
  t.fd(x3);x3+=5;t.rt(an);an+=4;
  ellipse(100, 100, 40, 40);
  fill(250, 0, 250);
  rect(200, 200, 50, 20);
  ellipse(200, 200, 40, 40);
  fill(0, 0, 250);
  line(20, 20, 200, 200);
  ellipse(100, 300, 30, 50);
push();fill(c1,c2,c3);
  rect(29, 29, 200, 20);
pop();
  move();
    p.display1(30,r);p.move();p.chbd();
//if(how_old(12)=='a'){r=200;}else{}

}

function move() {
  rect(x3, y3, 20, 20);
  x3 += 5;
  y3 += 3;
  if (x3 > width - 50) {
    x3 = 50;
  }
  if (y3 > height) {
    y3 = 0;
  }
}
