class Circle {
  constructor(r, x, y) {
    this.r = r;
    this.x = x;
    this.y = y;
  }

  showData() {
    console.log(`X-coordinate = ${this.x} `);
    console.log(`Y-coordinate = ${this.y} `);
    console.log(`Radius = ${this.r} `);
  }

  area() {
    let a = Math.PI * this.r ** 2;
    console.log(`Area of a circle = ${a} `);
  }
}

class Cylinder extends Circle {
  constructor(r, x, y, h) {
    super(r, x, y);
    this.h = h;
  }

  showData() {
    super.showData();
    console.log(`Height= ${this.h} `);
  }

  volume() {
    let v = Math.PI * this.r ** 2 * this.h;
    console.log(`Volume of a cylinder = ${v} `);
  }

}
export {Cylinder, Circle};

// Task 2
