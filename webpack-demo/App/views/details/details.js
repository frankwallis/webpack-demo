import ko from "knockout";
import detailsTemplate from './details.html';

let viewModel = ko.observable({
    title: 'Details'
});

let detailsRoute = {
    path: "details",
    viewModel: function() {
        this.title = "Details"
    },
    template: detailsTemplate,
    synchronous: true
};

export default detailsRoute;
