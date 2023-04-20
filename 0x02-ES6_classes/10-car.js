const CAR_CLONE_SYMBOL = Symbol('Car.clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[CAR_CLONE_SYMBOL] = this.cloneCar;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const clonedCar = new Car(this._brand, this._motor, this._color);
    Object.getOwnPropertySymbols(this).forEach(symbol => {
      if (symbol !== CAR_CLONE_SYMBOL) {
        clonedCar[symbol] = this[symbol];
      }
    });
    return clonedCar;
  }
}

export default Car;
