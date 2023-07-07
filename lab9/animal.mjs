class Animal {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
  isMammal() {
    console.log("It's a Mammal");
  }
  mate() {
    console.log("It's a Mate");
  }
}

class Duck extends Animal {
  constructor(age, gender, beakColor) {
    super(age, gender);
    this.beakColor = beakColor;
  }

  swim() {
    console.log("It can Swim");
  }

  quack() {
    console.log("It can Quack");
  }
}

class Fish extends Animal {
  constructor(age, gender, size, eat) {
    super(age, gender);
    this.sizeInFt = size;
    this.canEat = eat;
  }

  swim() {
    console.log("It can Swim");
  }
}

class Zebra extends Animal {
  constructor(age, gender, wild) {
    super(age, gender);
    this.isWild = wild;
  }

  run() {
    console.log("It can Run");
  }
}
