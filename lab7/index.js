// Task 2
class Room{
    constructor(length, breadth, height){
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }

    calculateArea(){
        return this.length * this.breadth;
    }

    calculateVolume(){
        return this.calculateArea() * this.height ;
    }
}

let bedRoom = new Room(5,4,3);
console.log(bedRoom.calculateVolume());



// Task 3
class Car{
    constructor(brandName, priceNew, color, odometer){
        this.brandName = brandName;
        this.priceNew = priceNew;
        this.color = color;
        this.odometer = odometer;
    }

    getPriceAfterUse(){
        return (this.priceNew * (1- (this.odometer/600000)))
    }

    updateMilage(travelledDistance){
        this.odometer += travelledDistance;
    }

    outputDetails(){
        return [this.brandName, this.priceNew, this.color, this.odometer];
    }
}

let firstCar = new Car("Toyota", 230000,"black", 456);
console.log(`Old Milage: ${firstCar.odometer}`);
firstCar.updateMilage(100);
console.log(`New Milage: ${firstCar.odometer}`);

console.log('\n')

let [brand, price, color, milage] = firstCar.outputDetails();
console.log(`- CAR DETAILS - \nBrand : ${brand} \nPrice : ${price} \nColor : ${color} \nMilage : ${milage} \n`);