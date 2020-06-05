class AMC {
    constructor(x, y){
        
        this.y = y;
        this.x = x
        this.w = 20;
        this.h = 50;
    }

    display(){
        
        // push();
        fill("#000000");
        stroke(255,0,0);
        strokeWeight(4)
        ellipseMode(CENTER);
        
        
        ellipse(this.x, this.y, 20, 50)
        // pop();
    }
}