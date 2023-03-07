const {
  expect,
} = require('chai');
const {
  Calculator,
} = require('../calculator.js');

const calc = new Calculator();

describe('Tests for add method', function () {
  describe('Positive cases for add method', function () {
    it('should sum positive numbers', async () => {
      expect(calc.add(3, 2, 4)).to.be.equal(9);
    });
    it('should sum negative numbers', async () => {
      expect(calc.add(-10, -2, -55)).to.be.equal(-67);
    });
    it('should sum both positive and negative numbers', async () => {
      expect(calc.add(10, -20, 30)).to.be.equal(20);
    });
    it('should sum positive float numbers', async () => {
      expect(calc.add(1.25, 2.55, 4.333)).to.be.equal(8.133);
    });
    it('should sum negative float numbers', async () => {
      expect(calc.add(-0.25, -5.39, -4.001)).to.be.equal(-9.641);
    });
    it('should sum both positive and negative float numbers', async () => {
      expect(calc.add(-0.1, -2.2, 8.3)).to.be.equal(6);
    });
    it('should sum positive numbers, float numbers and zero', async () => {
      expect(calc.add(65, 6.5, 0)).to.be.equal(71.5);
    });
    it('should sum positive numbers, float numbers and zero', async () => {
      expect(calc.add(65, 6.5, 0)).to.be.equal(71.5);
    });
    it('should sum negative numbers, float numbers and zero', async () => {
      expect(calc.add(-65, -6.5, 0)).to.be.equal(-71.5);
    });
    it('should sum positive, negative numbers, float numbers and zero', async () => {
      expect(calc.add(35, -67, -8.59887, 0, -6.567687, 6.766)).to.be.equal(-40.400557);
    });
    it('should sum zero and zero', async () => {
      expect(calc.add(0, 0, 0, 0)).to.be.equal(0);
    });
    it('should sum bigInts', async () => {
      expect(calc.add(3e5, 30e2)).to.be.equal(303000);
    });
  });
  describe('Negative cases for add method', function () {
    it('should return Number if array of strings is passed', async () => {
      expect(calc.add('5', '6', '55')).to.be.equal(66);
    });
    it('should return 0 if no params are passed', async () => {
      expect(calc.add()).to.be.equal(0);
    });
    it('should sum positive numbers and null', async () => {
      expect(calc.add(1, 4, null)).to.be.equal(5);
    });
    it('should sum negative numbers and null', async () => {
      expect(calc.add(-1, -54, null)).to.be.equal(-55);
    });
    it('should return 0 if sum zero and null', async () => {
      expect(calc.add(0, null)).to.be.equal(0);
    });
  });
});

describe('Tests for multiply method', function () {
  describe('Positive cases for multiply method', function () {
    it('should multiply positive numbers', async () => {
      expect(calc.multiply(3, 2, 4)).to.be.equal(24);
    });
    it('should multiply negative numbers', async () => {
      expect(calc.multiply(-10, -2, -55)).to.be.equal(-1100);
    });
    it('should multiply both positive and negative numbers', async () => {
      expect(calc.multiply(6, -10, 5)).to.be.equal(-300);
    });
    it('should multiply positive float numbers', async () => {
      expect(calc.multiply(0.25, 7.655, 5.7)).to.be.equal(10.908375000000001);
    });
    it('should multiply negative float numbers', async () => {
      expect(calc.multiply(-1.25, -0.39)).to.be.equal(0.48750000000000004);
    });
    it('should multiply both positive and negative float numbers', async () => {
      expect(calc.multiply(-0.9, 2.999)).to.be.equal(-2.6991);
    });
    it('should return 0 when positive numbers multiplied by zero', async () => {
      expect(calc.multiply(5, 7, 0)).to.be.equal(0);
    });
    it('should return 0 when negative numbers multiplied by zero', async () => {
      expect(calc.multiply(-15, -7, 0)).to.be.equal(0);
    });
    it('should return 0 when positive, negative float numbers multiplied zero', async () => {
      expect(calc.multiply(15.3, -7.2, 0)).to.be.equal(0);
    });
    it('should return 0 when multiply zero by zero', async () => {
      expect(calc.multiply(0, 0, 0)).to.be.equal(0);
    });
    it('should multiply bigInts', async () => {
      expect(calc.multiply(3e5, 25e3)).to.be.equal(7500000000);
    });
  });
  describe('Negative cases for multiply method', function () {
    it('should return 0 when numbers are multiplied by null', async () => {
      expect(calc.multiply(4, -6, 0.8, null)).to.be.equal(0);
    });
    it('should return 0 when 0 is multiplied by null', async () => {
      expect(calc.multiply(0, null)).to.be.equal(0);
    });
    it('should return Number if array of strings is passed', async () => {
      expect(calc.multiply('5', '3', '10')).to.be.equal(150);
    });
  });
});

describe('Tests for subtraction method', function () {
  describe('Positive cases for subtraction method', function () {
    it('should subtract positive numbers', async () => {
      expect(calc.subtraction(13, 4)).to.be.equal(9);
    });
    it('should subtract negative numbers', async () => {
      expect(calc.subtraction(-10, -5)).to.be.equal(-5);
    });
    it('should subtract both positive and negative numbers', async () => {
      expect(calc.subtraction(-10, 20)).to.be.equal(-30);
    });
    it('should subtract positive float numbers', async () => {
      expect(calc.subtraction(1.25, 0.55)).to.be.equal(0.7);
    });
    it('should subtract negative float numbers', async () => {
      expect(calc.subtraction(-0.25, -4.0000000001)).to.be.equal(3.7500000001);
    });
    it('should subtract both positive and negative float numbers', async () => {
      expect(calc.subtraction(-0.1, 2.22)).to.be.equal(-2.32);
    });
    it('should subtract positive number and zero', async () => {
      expect(calc.subtraction(5, 0)).to.be.equal(5);
    });
    it('should subtract negative number and zero', async () => {
      expect(calc.subtraction(-45, 0)).to.be.equal(-45);
    });
    it('should subtract positive float number and zero', async () => {
      expect(calc.subtraction(4.24, 0)).to.be.equal(4.24);
    });
    it('should subtract negative float number and zero', async () => {
      expect(calc.subtraction(-434.24, 0)).to.be.equal(-434.24);
    });
    it('should subtract zero and zero', async () => {
      expect(calc.subtraction(0, 0)).to.be.equal(0);
    });
    it('should subtract bigInts', async () => {
      expect(calc.subtraction(3e5, 5e3)).to.be.equal(295000);
    });
  });
  describe('Negative cases for subtract method', function () {
    it('should return Number if number is passed as a string', async () => {
      expect(calc.subtraction('5', '86')).to.be.equal(-81);
    });
    it('should subtract positive numbers and null', async () => {
      expect(calc.subtraction(10, null)).to.be.equal(10);
    });
    it('should subtract negative numbers and null', async () => {
      expect(calc.subtraction(-800, null)).to.be.equal(-800);
    });
    it('should subtract zero and null', async () => {
      expect(calc.subtraction(0, null)).to.be.equal(0);
    });
  });
});

describe('Tests for divide method', function () {
  describe('Positive cases for divide method', function () {
    it('should divide positive numbers', async () => {
      expect(calc.divide(50, 10)).to.be.equal(5);
    });
    it('should divide negative numbers', async () => {
      expect(calc.divide(-10, -2)).to.be.equal(5);
    });
    it('should divide positive numbers with a remainder', async () => {
      expect(calc.divide(10, 7)).to.be.equal(1.4285714285714286);
    });
    it('should divide negative numbers with a remainder', async () => {
      expect(calc.divide(-5, -4)).to.be.equal(1.25);
    });
    it('should divide both positive and negative numbers', async () => {
      expect(calc.divide(-20, 5)).to.be.equal(-4);
    });
    it('should divide positive float numbers', async () => {
      expect(calc.divide(6.5, 5.6)).to.be.equal(1.1607142857142858);
    });
    it('should divide negative float numbers', async () => {
      expect(calc.divide(-5.5, -6.6)).to.be.equal(0.8333333333333334);
    });
    it('should divide both positive and negative float numbers', async () => {
      expect(calc.divide(-1.1, 2.34567)).to.be.equal(-0.46894917017312754);
    });
    it('should divide positive numbers and zero', async () => {
      expect(calc.divide(0, 6)).to.be.equal(0);
    });
    it('should divide negative numbers and zero', async () => {
      expect(calc.divide(0, -5.5)).to.be.equal(0);
    });
    it('should divide positive bigInts', async () => {
      expect(calc.divide(3e5, 5e3)).to.be.equal(60);
    });
    it('should divide negative bigInts', async () => {
      expect(calc.divide(-3e5, -5e3)).to.be.equal(60);
    });
  });
  describe('Negative cases for divide method', function () {
    it('should return Number if number is passed as a string', async () => {
      expect(calc.divide('10', '2')).to.be.equal(5);
    });
    it('should return Infinity if divide positive numbers by zero', async () => {
      expect(calc.divide(10, 0)).to.be.equal(Infinity);
    });
    it('should return -Infinity if divide negative numbers by zero', async () => {
      expect(calc.divide(-110, 0)).to.be.equal(-Infinity);
    });
    it('should return Infinity if divide positive numbers by null', async () => {
      expect(calc.divide(50, null)).to.be.equal(Infinity);
    });
    it('should return -Infinity if divide negative numbers by null', async () => {
      expect(calc.divide(-50, null)).to.be.equal(-Infinity);
    });
  });
});

describe('Tests for exponentiation method', function () {
  describe('Positive cases for exponentiation method', function () {
    it('should exponent positive number', async () => {
      expect(calc.exponentiation(3)).to.be.equal(9);
    });
    it('should exponent negative number', async () => {
      expect(calc.exponentiation(-10)).to.be.equal(100);
    });
    it('should exponent positive float', async () => {
      expect(calc.exponentiation(3.4)).to.be.equal(11.559999999999999);
    });
    it('should exponent negative float', async () => {
      expect(calc.exponentiation(-1.1)).to.be.equal(1.2100000000000002);
    });
    it('should exponent 0', async () => {
      expect(calc.exponentiation(0)).to.be.equal(0);
    });
  });
  describe('Negative cases for exponentiation method', function () {
    it('should return 0 if exponent null', async () => {
      expect(calc.exponentiation(null)).to.be.equal(0);
    });
  });
});
