﻿// import typescript
require('ts-node/register');

// jsdom
var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

global.window.addEventListener('load', function () {
    console.log('JSDOM Loaded');
});