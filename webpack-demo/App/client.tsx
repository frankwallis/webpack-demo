import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Calculator} from './calculator';
import "./calculator.css";

var container = document.getElementById('react1');
ReactDOM.render(<Calculator />, container);

import "./calculator.css";
export {Calculator} from './calculator.tsx';