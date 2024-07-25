for (var i = 50; i < 400; i=i+50) {
    var pumpkin=createSprite(i,50,20,20) ;
      pumpkin.setAnimation("pumpkin");
      pumpkin.scale=0.5;
    }
     for (var i = 50; i < 400; i=i+50) {
    var mushrooms=createSprite(i,100,20,20) ;
      mushrooms.setAnimation("mushroom");
       mushrooms.scale=0.5;
    }
    
   for (var i = 50; i < 400; i=i+50) {
    var carrots=createSprite(i,150,20,20) ;
      carrots.setAnimation("carrot");
       carrots.scale=0.5;
   }
    
   for (var i = 50; i < 400; i=i+50) {
    var potato=createSprite(i,200,20,20) ;
      potato.setAnimation("potato");
       potato.scale=0.5;
    }
    
   for (var i = 50; i < 400; i=i+50) {
    var tomatoes=createSprite(i,250,20,20) ;
      tomatoes.setAnimation("tomato");
       tomatoes.scale=0.5;
    }
   
   for (var i = 50; i < 400; i=i+50) {
    var watermelon=createSprite(i,300,20,20) ;
     watermelon.setAnimation("watermelon");
      watermelon.scale=0.5;
    }
   function draw() {
     
     background(rgb(139,69,19));
     drawSprites();
   
   
   }
   
   
   