//import detailsTemplate from './details.html';
var detailsTemplate = require('./details.html');
var detailsRoute = {
    path: "details",
    viewModel: function () {
        this.title = "Details";
    },
    template: detailsTemplate,
    synchronous: true
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = detailsRoute;
//# sourceMappingURL=details.js.map