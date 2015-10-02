var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TweetView = (function (_super) {
    __extends(TweetView, _super);
    function TweetView(props) {
        _super.call(this, props);
    }
    TweetView.prototype.render = function () {
        return (React.createElement("div", {"className": 'Home'}, React.createElement("h2", null, "Tweets (React Component!!)"), React.createElement("div", {"className": 'Tweet'}, React.createElement("div", {"className": 'Tweet-author'}, React.createElement("a", {"href": this.props.link('tweets', { user: 'dan_abramov' })}, "Dan Abramov ‏@dan_abramov")), React.createElement("div", {"className": 'Tweet-time'}, "12m12 minutes ago"), React.createElement("div", {"className": 'Tweet-content'}, "Another use case for this.context I think might be valid: forms. They are too painful right now.")), React.createElement("div", {"className": 'Tweet'}, React.createElement("div", {"className": 'Tweet-author'}, React.createElement("a", {"href": this.props.link('tweets', { user: 'afanasjevas' })}, "Eduardas Afanasjevas ‏@afanasjevas")), React.createElement("div", {"className": 'Tweet-time'}, "12m12 minutes ago"), React.createElement("div", {"className": 'Tweet-content'}, "I just published “What will Datasmoothie bring to the analytics startup landscape?” https://medium.com/@afanasjevas/what-will-datasmoothie-bring-to-the-analytics-startup-landscape-f7dab70d75c3?source=tw-81c4e81fe6f8-1427630532296")), React.createElement("div", {"className": 'Tweet'}, React.createElement("div", {"className": 'Tweet-author'}, React.createElement("a", {"href": this.props.link('tweets', { user: 'LNUGorg' })}, "LNUG ‏@LNUGorg")), React.createElement("div", {"className": 'Tweet-time'}, "52m52 minutes ago"), React.createElement("div", {"className": 'Tweet-content'}, " new talks uploaded on our YouTube page - check them out http://bit.ly/1yoXSAO"))));
    };
    return TweetView;
})(React.Component);
exports.TweetView = TweetView;
var tweetRoute = {
    path: "tweets",
    template: "<div data-bind='reactComponent: component'></div>",
    viewModel: function () {
        this.component = TweetView;
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tweetRoute;
//# sourceMappingURL=tweet-view.js.map