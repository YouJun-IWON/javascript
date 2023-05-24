// 운송수단
class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0;
    this.acceleration = acceleration;
  }

  accelerate() {
    this.speed += this.acceleration;
  }
  decelerate() {
    if (this.speed <= 0) {
      console.log('stop');
      return;
    }
    this.speed -= this.acceleration;
  }
}

// 자전거
class Bicycle extends Vehicle {
  constructor(price = 100, acceleration) {
    super(acceleration); // 여기서 위의 constructor가 호출된다.
    this.price = price;
    this.wheel = 2;
  }
}

const bicycle = new Bicycle(300, 2);
bicycle.accelerate();
bicycle.accelerate();
console.log(bicycle); // Bicycle { speed: 4, acceleration: 2, price: 300, wheel: 2 }
console.log(bicycle instanceof Bicycle); // true
console.log(bicycle instanceof Vehicle); // true

// 자동차
class Car extends Bicycle {
  constructor(license, price, acceleration) {
    super(price, acceleration);
    this.license = license;
    this.wheel = 4;
  }

  // Overriding
  accelerate() {
    if (!this.license) {
      console.error('무면허');
      return;
    }
    this.speed += this.acceleration;
    console.log('가속', this.speed);
  }
}

const carA = new Car(true, 7000, 10);
const carB = new Car(false, 4000, 6);
carA.accelerate();
carA.accelerate();
console.log(carA);
// 가속 10
// 가속 20
// Car {
//   speed: 20,
//   acceleration: 10,
//   price: 7000,
//   wheel: 4,
//   license: true
// }
carB.accelerate();
console.log(carB);
// Car {
//     speed: 0,
//     acceleration: 6,
//     price: 4000,
//     wheel: 4,
//     license: false
//   }
// 무면허
console.log(carA instanceof Car); // true
console.log(carB instanceof Bicycle); // true
console.log(carB instanceof Vehicle); // true

// 보트
class Boat extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration);
    this.price = price;
    this.motor = 1;
  }
}

const boat = new Boat(10000, 5);
console.log(boat); // Boat { speed: 0, acceleration: 5, price: 10000, motor: 1 }
console.log(boat instanceof Bicycle); // false
