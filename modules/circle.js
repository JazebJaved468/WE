export default class Circle{
    constructor(r, x, y){
        this.r = r;
        this.x = x;
        this.y = y;
    }

    area(){
        let area = Math.PI * (this.r)**2;
        return area;
    }
}

