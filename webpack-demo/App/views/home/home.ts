import * as ko from "knockout";

//import homeTemplate from './home.html';
let homeTemplate = require('./home.html');

let homeRoute: ICherrytreeRoute = {
    path: "",
    viewModel: function() {
      this.title = "home"  
    },
    template: homeTemplate,
    synchronous: true
}

export default homeRoute;
