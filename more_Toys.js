let slider1,slider2,slider3,parP;
let c1=100,c2=100,c3=100;
function start(){
slider1=createSlider(0,250,100,5);
slider2=createSlider(0,250,100,5);
slider3=createSlider(0,250,100,5);
parP=createP("changing colors of the rectangle.............");
parP.style('padding','20px');
slider1.parent(parP);parP.position(800,120);
slider2.parent(parP);
slider3.parent(parP);
slider1.mousePressed(()=>{c1=slider1.value();});
slider2.mousePressed(()=>{c2=slider2.value();});
slider3.mousePressed(()=>{c3=slider3.value();});
}
