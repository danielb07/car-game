class Health {
    constructor(x){
        this.x = x;
    }
    display(){
        fill("red");
        noStroke();
        rectMode(CENTER)
        rect(this.x, 702, 20, 20)
    }
}