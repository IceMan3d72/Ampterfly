var diam1=30;
function setup() { 
   createCanvas(600, 400); 
   background("#003366"); 
}

function draw() {   
   fill(255,0,200);   
   stroke(255,255,0);   
   strokeWeight(5);       
   ellipse(250,150,diam1);    
   ellipse(350,150,diam1);                   
   diam1=diam1+5;    //increase the size     
   if(diam1>60){       
      diam1=5;   
   }else{       
     diam1=diam1+5;   
   }
   stroke(255,255,36);
   strokeWeight(5);
   line(300,180,300,250);
   arc(300,280,210,90,0, PI / 1.0);
   noFill();
}