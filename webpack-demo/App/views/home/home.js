import ko from "knockout";
import homeTemplate from './home.html';

let viewModel = ko.observable({
    title: "Home"
})

let homeRoute = {
    path: "",
    viewModel: function() {
      this.title = "home"  
    },
    template: homeTemplate,
    synchronous: true
}

export default homeRoute;
