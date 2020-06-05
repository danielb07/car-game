

 var car;
 var idiotCars = [];
 var life = [];
 var h1,h2,h3,h4,h5
 var gameState = 0;
 
//  AMS stands for aimlessly moving car
 

 
function setup() {
   createCanvas(displayWidth,displayHeight);
   car = new Car(displayWidth/2, 609);

   h1 = new Health(329);
   life.push(h1);

   h2 = new Health(369);
   life.push(h2);

    h3 = new Health(409);
    life.push(h3);

    h4 = new Health(449);
    life.push(h4);

    h5 = new Health(489);
    life.push(h5);
   

}
 
function draw() {
    background(200);
    if(gameState === 0){
        car.display();
        car.moveMent();
        
        if(frameCount % 44 === 0){
        var x = random(76, 1539);
            var ams = new AMC(x, 42)
            idiotCars.push(ams)
            
        }

        for(var i=0 ; i<idiotCars.length;i++){
            var cars = idiotCars[i];
            cars.y += 4
            idiotCars[i].display();
        }

        lifeTime();

        for(var i=0; i<life.length;i++){
            life[i].display();
        }

        healthLoss();
} else if(gameState === 1){
    textSize(40)
    text("GAME OVER, better luck next time", 786, 354)
}
    


    // if (ams !== undefined){
    //     ams.display();
    // }
    
    

    
}
// this will help with the position
mousePressed = () => {
    console.log(mouseX + ", " + mouseY);
    
}

lifeTime = () =>{
    for(var i=0 ; i<idiotCars.length;i++){
        var cars = idiotCars[i];
        if(cars.y >= 637){
            var Cars = idiotCars.shift()
            
        }
    }
}

healthLoss = () =>{
    for (var i=0; i<idiotCars.length;i++){
        var cars = idiotCars[i];
        
            
            if(cars.x + (cars.w/2)>car.x-(car.w/2) && cars.x - (cars.w/2) < car.x + (car.w/2) && cars.y + (cars.h/2)>car.y-(car.h/2) && cars.y - (cars.h/2) < car.y + (car.h/2) ){
                idiotCars.shift();
                life.pop();
            }

            if(life.length === 0){
                gameState = 1;
            }
        
    }
    
}