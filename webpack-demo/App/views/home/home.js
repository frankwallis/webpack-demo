//import homeTemplate from './home.html';
var homeTemplate = require('./home.html');
var homeRoute = {
    path: "",
    viewModel: function () {
        this.title = "home";
    },
    template: homeTemplate,
    synchronous: true
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = homeRoute;
//# sourceMappingURL=home.js.map