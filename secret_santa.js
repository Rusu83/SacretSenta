var img,txt,butt,nume="nimeni";
var n=5;
var omini=["Andrei","Laurențiu","Liviu","Sânziana","Sorina"];
var paroli=["Npbv>oEYgjZ","5735","Aml^n","O1KEN","J_q]i[<m9WcUaS"];
var mix=["(", ",", "+", "*", ")"];

function preload(){
  img=loadImage("data/img.jpg");
}

function setup() {
  txt=createInput();
  txt.size(window.innerWidth/3,window.innerHeight/10);
  butt=createButton("Află cui îi iei cado'");
  butt.size(window.innerWidth/3,window.innerHeight/10);
  createCanvas(window.innerWidth,window.innerHeight);
  txt.position(width/2-width/6,height/2);
  butt.position(width/2-width/6,height*0.75);
  butt.mousePressed(afla);
  textSize(width/10);
  textAlign(CENTER,CENTER);
}


function draw() {
  background(img);
  if(nume!="nimeni"){
    txt.hide();
    butt.hide();
    text(nume,width/2, height/2);
  }
}

function afla(){
  var i;
  var txt2=[];
  var parola="";
  for(i=0;i<txt.value().length;i++){
    x=unchar(txt.value()[i]);
    txt2[i]=char(x-i-1);
  }
  parola=join(txt2,'');
  for(i=0;i<n;i++)
    if(parola==paroli[i])
      nume=omini[unchar(mix[n-1-i])-40];
}
