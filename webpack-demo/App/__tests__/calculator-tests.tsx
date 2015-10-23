import * as React from "react";
import * as chai from "chai";

var TestUtils = require("react-addons-test-utils");

import {Calculator} from "../calculator.tsx";

var expect = chai.expect;

describe('Calculator', () => {

  it('initialises correctly', () => {
      let calculator = TestUtils.renderIntoDocument(<Calculator/>);
      let buttons = TestUtils.scryRenderedDOMComponentsWithTag(calculator, 'button');
      expect(buttons.length).to.equal(12);
      
      let operand = TestUtils.findRenderedDOMComponentWithClass(calculator, 'adder-operand');
      expect(operand.innerHTML).to.equal("0"); 

      let total = TestUtils.findRenderedDOMComponentWithClass(calculator, 'adder-total');
      expect(total.innerHTML).to.equal("0"); 
  });

  it('handles digit clicks', () => {
      let calculator = TestUtils.renderIntoDocument(<Calculator/>);

      let digits = TestUtils.scryRenderedDOMComponentsWithClass(calculator, 'adder-button-digit');
      let digit = digits[0];
      
      TestUtils.Simulate.click(digit);
      
      let operand = TestUtils.findRenderedDOMComponentWithClass(calculator, 'adder-operand');
      expect(operand.innerHTML).to.equal(digit.innerHTML); 
  });

  it('handles add button click', () => {
      let calculator = TestUtils.renderIntoDocument(React.createElement(Calculator));

      let digits = TestUtils.scryRenderedDOMComponentsWithClass(calculator, 'adder-button-digit');
      let digit = digits[0];
      
      TestUtils.Simulate.click(digit);

      let operand = TestUtils.findRenderedDOMComponentWithClass(calculator, 'adder-operand');
      expect(operand.innerHTML).to.equal(digit.innerHTML); 

      let add = TestUtils.findRenderedDOMComponentWithClass(calculator, 'adder-button-add');
      TestUtils.Simulate.click(add);
      
      let total = TestUtils.findRenderedDOMComponentWithClass(calculator, 'adder-total');
      expect(total.innerHTML).to.equal(digit.innerHTML);       
      expect(operand.innerHTML).to.equal("0"); 
  });

  it('handles clear button click', () => {
      let calculator = TestUtils.renderIntoDocument(React.createElement(Calculator));

      let digits = TestUtils.scryRenderedDOMComponentsWithClass(calculator, 'adder-button-digit');
      let digit = digits[0];
      
      TestUtils.Simulate.click(digit);

      let clear = TestUtils.findRenderedDOMComponentWithClass(calculator, 'adder-button-clear');
      TestUtils.Simulate.click(clear);
      
      let operand = TestUtils.findRenderedDOMComponentWithClass(calculator, 'adder-operand');
      expect(operand.innerHTML).to.equal("0"); 

      let total = TestUtils.findRenderedDOMComponentWithClass(calculator, 'adder-total');
      expect(total.innerHTML).to.equal("0");       
  });

});
