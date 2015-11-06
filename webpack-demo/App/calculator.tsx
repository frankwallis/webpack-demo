import * as React from 'react';
import {CalculatorStore} from "./calculator-store";

var calcStyles = require("./calculator.css");
console.log(JSON.stringify(calcStyles, null, 3));

export class Calculator extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.calculatorStore = new CalculatorStore();
    }

    private calculatorStore: CalculatorStore;

    input(digit) {
        this.calculatorStore.input(digit);
        this.forceUpdate();
    }

    clear() {
        this.calculatorStore.clear();
        this.forceUpdate();
    }

    add() {
        this.calculatorStore.add();
        this.forceUpdate();
    }

    inputButton(digit: number) {
        return <button className={calcStyles.adderButtonDigit}
            key={digit}
            onClick={() => this.input(digit) }>{digit}</button>;
    }

    render() {
        // build the rows of digits
        let buttons = [
            [1, 2, 3].map((digit) => this.inputButton(digit)),
            [4, 5, 6].map((digit) => this.inputButton(digit)),
            [7, 8, 9].map((digit) => this.inputButton(digit))
        ];

        // add the bottom row
        buttons.push([
            <button className={calcStyles.adderButtonAdd}
                key="add"
                onClick={() => this.add() }>+</button>,
            this.inputButton(0),
            <button className={calcStyles.adderButtonClear}
                key="clear"
                onClick={() => this.clear() }>c</button>
        ]);

        // wrap with row divs
        let buttonrows = buttons.map((row, idx) => {
            return (
                <div key={"row" + idx} className={calcStyles.adderButtonRow}>
                    {row}
                </div>
            );
        });

        return (
            <div className={calcStyles.adderContainer}>
                <div className={calcStyles.adderButtonRow}>
                   <span className={calcStyles.adderOperand}>{this.calculatorStore.operand}</span>
                </div>

                <div className={calcStyles.adderButtonRow}>
                   <span className={calcStyles.adderTotal}>{this.calculatorStore.total}</span>
                </div>

                {buttonrows}
            </div>
        );
    }
}
