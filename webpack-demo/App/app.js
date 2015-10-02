var Cherrytree = require('cherrytree');
var ko = require("knockout");
var knockoutMiddleware = require("cherrytree-for-knockout");
require("./knockout-react");
require('./style.css');
// import our route configurations
var layout_1 = require("./views/layout/layout");
var home_1 = require("./views/home/home");
var details_1 = require("./views/details/details");
var tweet_view_1 = require("./views/react/tweet-view");
// create the router
var router = new Cherrytree({ log: true });
// configure all the routes
router.map(function (route) {
    route('layout', layout_1.default, function () {
        route('home', home_1.default);
        route('details', details_1.default);
        route('tweets', tweet_view_1.default);
    });
});
// add the transition handling middleware
router.use(knockoutMiddleware);
// start listening to browser's location bar changes
router.listen();
// bootstrap the app
ko.applyBindings({ router: router }, document.body);
// just for use in developer tools
window["ko"] = ko;
//# sourceMappingURL=app.js.map