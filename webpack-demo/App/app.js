import $ from 'jquery';
import Cherrytree from 'cherrytree';
import ko from "knockout";

import knockoutMiddleware from "cherrytree-for-knockout";
import "./knockout-react";
require('./style.css');

// import our route configurations
import layoutRoute from "./views/layout/layout";
import homeRoute from "./views/home/home";
import detailsRoute from "./views/details/details";
import tweetRoute from "./views/react/tweet-view.jsx";

// create the router
let router = new Cherrytree({ log: true });

// configure all the routes
router.map((route) => {
    route('layout', layoutRoute, () =>
    {
        route('home', homeRoute);
        route('details', detailsRoute);
        route('tweets', tweetRoute);
    });
});

// add the transition handling middleware
router.use(knockoutMiddleware);

// start listening to browser's location bar changes
router.listen();

// bootstrap the app
ko.applyBindings({ router: router }, document.body);

// just for use in developer tools
window.ko = ko;