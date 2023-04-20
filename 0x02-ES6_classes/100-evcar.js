// 10-car.js

const carBrand = Symbol('brand');
const carMotor = Symbol('motor');
const carColor = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[carBrand] = brand;
    this[carMotor] = motor;
    this[carColor] = color;
  }

  get brand() {
    return this[carBrand];
  }

  get motor() {
    return this[carMotor];
  }

  get color() {
    return this[carColor];
  }

  cloneCar() {
    return new Car(this[carBrand], this[carMotor], this[carColor]);
  }
}

// 100-evcar.js

import Car from './10-car.js';

const evCarRange = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[evCarRange] = range;
  }

  get range() {
    return this[evCarRange];
  }

  cloneCar() {
    return new Car(this[carBrand], this[carMotor], this[carColor]);
  }
}

// 100-main.js

import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);
