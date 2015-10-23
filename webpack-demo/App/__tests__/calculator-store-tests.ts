import {CalculatorStore} from "../calculator-store";
import * as chai from "chai";

var expect = chai.expect;

describe('CalculatorStore', () => {

  	it('initially all values are zero', () => {
      let calculatorStore = new CalculatorStore();		
		expect(calculatorStore.total).to.equal(0);
		expect(calculatorStore.operand).to.equal(0);
  	});

  it('handles valid input digits', () => {
      let calculatorStore = new CalculatorStore();
		calculatorStore.input(0);
		expect(calculatorStore.operand).to.equal(0);
		calculatorStore.input(5);
		expect(calculatorStore.operand).to.equal(5);
		calculatorStore.input(1);
		expect(calculatorStore.operand).to.equal(51);
  });

  xit('handles invalid input digits', () => {
      let calculatorStore = new CalculatorStore();
		calculatorStore.input(99);
		expect(calculatorStore.operand).to.equal(0);
		calculatorStore.input('a');
		expect(calculatorStore.operand).to.equal(0);
		calculatorStore.input({});
		expect(calculatorStore.operand).to.equal(0);
  });

  it('adds numbers', () => {
      let calculatorStore = new CalculatorStore();
		calculatorStore.input(5);
		calculatorStore.add();
		expect(calculatorStore.total).to.equal(5);
		expect(calculatorStore.operand).to.equal(0);
		
		calculatorStore.input(66);
		calculatorStore.add();
		expect(calculatorStore.total).to.equal(71);
		expect(calculatorStore.operand).to.equal(0);

		calculatorStore.add();
		expect(calculatorStore.total).to.equal(71);
		expect(calculatorStore.operand).to.equal(0);
  });

});
