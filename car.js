class Car {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 50;
    }

    display(){
        fill("red");
        stroke("#000000");
        strokeWeight(4);
        ellipseMode(CENTER);
        ellipse(this.x,this.y, 20, 50);
    }

    moveMent(){
         if(keyIsDown(65)){
            this.x -= 4;
        }else if(keyIsDown(68)){
            this.x +=4;
        }
    }
}