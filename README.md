# webpack-demo

A sample Visual Studio project using WebPack, Knockout, ES6, Babel, CherryTree and React

## Running

- Install NodeJS
- Open a command prompt
- Install webpack globally with `npm install -g webpack`
- Clone the project with ```git clone https://github.com/frankwallis/webpack-demo.git```
- `cd` into the project directory ```cd webpack-demo/webpack-demo```
- run `npm install`.
- Run `webpack -w`

- Open the solution in Visual Studio
- Run the application

## Overview

- The source code is in /App
- The project uses npm to install its packages into ```node_modules``` and these are configured in ```package.json```
- Webpack watches for updates and continuously bundles the project into ```/Built```
- It is possible to host React components inside Knockout components, but not vice-versa.
- Babel compiles ES6 and JSX to ES5.
- WebPack can be configured to run in Visual Studio and write to the output window
- CherryTree is based on router.js which is used by Ember.

## Issues

VS 2012 cannot handle the ES6 syntax - this should be fixed in VS2015

## More information

- https://github.com/QubitProducts/cherrytree
- https://github.com/nathanboktae/cherrytree-for-knockout

- http://developer.telerik.com/featured/webpack-for-visual-studio-developers/
- https://github.com/webpack/docs/wiki/Usage-with-Visual-Studio
