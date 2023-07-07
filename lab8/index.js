// Task 1

let a = [24, 61, 78, 92, 88, 30];

let factorialsArray = a.map((i) => {
  return factorial(i);
});

let divideArray = a.map((i) => {
  return i / 2;
});

let cosArray = a.map((i) => {
  return Math.cos(i);
});

function factorial(num) {
  if (num < 0) {
    console.log("Error, can't compute factorial of negative numbers");
  } else {
    let fact = 1;
    while (num > 0) {
      fact = fact * num;
      num--;
    }
    return fact;
  }
}

console.log(a);
console.log(factorialsArray);
console.log(divideArray);
console.log(cosArray);

// Task 2
let collection = [
  { property_num: 3, location: "saddar", price: 430000, owner: "ali" },
  { property_num: 5, location: "saddar", price: 430000, owner: "ali" },
  { property_num: 7, location: "saddar", price: 430000, owner: "ali" },
  { property_num: 9, location: "saddar", price: 430000, owner: "ali" },
];
let j = 1;
collection.map((obj) => {
  document.write(`Object No ${j}`) +
    document.write(`<br>`) +
    document.write(`Property Number: ${obj["property_num"]}
    Property Location : ${obj["location"]}
    Property Price : ${obj["price"]}
    Property Owner : ${obj["owner"]}`) +
    document.write(`<br>`);
  j++;
});




// Task 4
class Fan {
  constructor(speed, type, company) {
    this.speed = speed;
    this.type = type;
    this.company = company;
  }
}

class RoomCooler extends Fan {
  constructor(speed, type, company, size, turbo) {
    super(speed, type, company);
    this.size = size;
    this.turbo = turbo;
  }
}

let roomFan = new RoomCooler(30, "manual", "osaka", "medium", "high");

console.log(
  `- FAN DETAILS - \nSpeed : ${roomFan.speed} \nType : ${roomFan.type} \nCompany : ${roomFan.company} \nSize : ${roomFan.size} \nTurboCooling : ${roomFan.turbo}`
);
