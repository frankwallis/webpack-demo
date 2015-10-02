import * as ko from "knockout";

//import detailsTemplate from './details.html';
let detailsTemplate = require('./details.html');

let detailsRoute = {
    path: "details",
    viewModel: function() {
        this.title = "Details"
    },
    template: detailsTemplate,
    synchronous: true
};

export default detailsRoute;
