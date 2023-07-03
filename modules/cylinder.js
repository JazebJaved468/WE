import Circle from "./circle.js";

export default class Cylinder extends Circle{
    constructor(r,x,y,h){
        super(r,x,y);
        this.h = h;
    }

    volume(){
       let vol =  super.area() * this.h;
       return vol;
    }
}

let c = new Cylinder(4,2,3,5);
console.log(c.volume());