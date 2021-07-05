    var Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies;
    
    var particles = [];
    var plinkos = [];
    var divisions =[];
    
    var divisionHeight=300;
    var score =0;


    function setup() {
      createCanvas(800, 800);
      engine = Engine.create();
      world = engine.world;
      ground = new Ground(width/2,height,width,20);

      //create division objects
      for (var k = 0; k <=80; k = k + 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }

      for(var n = 0; n <=160; n = n + 160){
        divisions.push(new Divisions(n,height-divisionHeight/2,10,divisionHeight));
      }

      for(var h = 0; h <=240; h = h + 240){
        divisions.push(new Divisions(h,height-divisionHeight/2,10,divisionHeight));
      }

      for(var c = 0; c <=320; c = c + 320){
        divisions.push(new Divisions(c,height-divisionHeight/2,10,divisionHeight));
      }

      for(var a = 0; a <=400; a = a + 400){
        divisions.push(new Divisions(a,height-divisionHeight/2,10,divisionHeight));
      }

      for(var b = 0; b <=480; b = b + 480){
        divisions.push(new Divisions(b,height-divisionHeight/2,10,divisionHeight));
      }

      for(var d = 0; d <=560; d = d + 560){
        divisions.push(new Divisions(d,height-divisionHeight/2,10,divisionHeight));
      }

      for(var f = 0; f <=640; f = f + 640){
        divisions.push(new Divisions(f,height-divisionHeight/2,10,divisionHeight));
      }

      for(var e = 0; e <=720; e = e + 720){
        divisions.push(new Divisions(e,height-divisionHeight/2,10,divisionHeight));
      }

      for(var j = 0; j <=800; j = j + 800){
        divisions.push(new Divisions(j,height-divisionHeight/2,10,divisionHeight));
      }



      //create 1st row of plinko objects
      for (var j = 75; j <=width; j=j+50) { 
        plinkos.push(new Plinko(j,75));
      }

      //create 2nd row of plinko objects
      for (var j = 50; j <=width-10; j=j+50) 
      {
        plinkos.push(new Plinko(j,175));
      }

      //create 3rd row of plinko objects
      
      for (var j = 75; j <=width; j=j+50) { 
        plinkos.push(new Plinko(j,275));
      }
      
      //create 4th row of plinko objects

      for (var j = 50; j <=width; j=j+50) { 
        plinkos.push(new Plinko(j,375));
      }

      //create particle objects
      if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10));
      }
        
       

    }
    


    function draw() {
      background("black");
      textSize(20)
    
      Engine.update(engine);
      ground.display();
      
      //display the plinkos 
      for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();   
      }
      
      //display the divisions
      for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
      }

      //display the paricles 
      for(var m = 0; m<particles.length; m++){
        particles[m].display();
      }
    }