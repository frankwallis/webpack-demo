import ko from "knockout";
import homeTemplate from './home.html';

let homeRoute = {
    path: "",
    viewModel: function() {
      this.title = "home"  
    },
    template: homeTemplate,
    synchronous: true
}

export default homeRoute;
