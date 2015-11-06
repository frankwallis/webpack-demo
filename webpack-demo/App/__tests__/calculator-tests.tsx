import * as React from "react";
import {expect} from "chai";

var TestUtils = require("react-addons-test-utils");

var calcStyles = require("../calculator.css");
import {Calculator} from "../calculator";

describe('Calculator', () => {

    it('initialises correctly', () => {
        let calculator = TestUtils.renderIntoDocument(<Calculator/>);
        let buttons = TestUtils.scryRenderedDOMComponentsWithTag(calculator, 'button');
        expect(buttons.length).to.equal(12);

        let operand = TestUtils.findRenderedDOMComponentWithClass(calculator, calcStyles.adderOperand);
        expect(operand.innerHTML).to.equal("0");

        let total = TestUtils.findRenderedDOMComponentWithClass(calculator, calcStyles.adderTotal);
        expect(total.innerHTML).to.equal("0");
    });

    it('handles digit clicks', () => {
        let calculator = TestUtils.renderIntoDocument(<Calculator/>);

        let digits = TestUtils.scryRenderedDOMComponentsWithClass(calculator, calcStyles.adderButtonDigit);
        let digit = digits[0];

        TestUtils.Simulate.click(digit);

        let operand = TestUtils.findRenderedDOMComponentWithClass(calculator, calcStyles.adderOperand);
        expect(operand.innerHTML).to.equal(digit.innerHTML);
    });

    it('handles add button click', () => {
        let calculator = TestUtils.renderIntoDocument(<Calculator/>);

        let digits = TestUtils.scryRenderedDOMComponentsWithClass(calculator, calcStyles.adderButtonDigit);
        let digit = digits[0];

        TestUtils.Simulate.click(digit);

        let operand = TestUtils.findRenderedDOMComponentWithClass(calculator, calcStyles.adderOperand);
        expect(operand.innerHTML).to.equal(digit.innerHTML);

        let add = TestUtils.findRenderedDOMComponentWithClass(calculator, calcStyles.adderButtonAdd);
        TestUtils.Simulate.click(add);

        let total = TestUtils.findRenderedDOMComponentWithClass(calculator, calcStyles.adderTotal);
        expect(total.innerHTML).to.equal(digit.innerHTML);
        expect(operand.innerHTML).to.equal("0");
    });

    it('handles clear button click', () => {
        let calculator = TestUtils.renderIntoDocument(<Calculator/>);

        let digits = TestUtils.scryRenderedDOMComponentsWithClass(calculator, calcStyles.adderButtonDigit);
        let digit = digits[0];

        TestUtils.Simulate.click(digit);

        let clear = TestUtils.findRenderedDOMComponentWithClass(calculator, calcStyles.adderButtonClear);
        TestUtils.Simulate.click(clear);

        let operand = TestUtils.findRenderedDOMComponentWithClass(calculator, calcStyles.adderOperand);
        expect(operand.innerHTML).to.equal("0");

        let total = TestUtils.findRenderedDOMComponentWithClass(calculator, calcStyles.adderTotal);
        expect(total.innerHTML).to.equal("0");
    });

});
