import $ from 'jquery';
import Cherrytree from 'cherrytree';
import ko from "knockout";
import knockoutMiddleware from "cherrytree-for-knockout";

require('./style.css');

// import our routes
import layoutRoute from "./views/layout/layout";
import homeRoute from "./views/home/home";
import detailsRoute from "./views/details/details";

// create the router
let router = new Cherrytree({ log: true });

// configure all the routes
router.map((route) => {
    route('layout', layoutRoute, () =>
    {
        route('home', homeRoute);
        route('details', detailsRoute);
    });
});

// add the transition handling middleware
router.use(knockoutMiddleware);

// start listening to browser's location bar changes
router.listen();

// install middleware that will handle transitions
/*
router.use(function activate (transition) {
    transition.routes.forEach((route, i) => {
        let handler = route.options.handler;
        router.log(`Transition #${transition.id} activating '${route.name}'`);
        handler.activate(transition.params);
        if (handler.config.template) {
            let parent = transition.routes[i - 1];
            let $container = parent ? $(parent.options.handler.view).find('.container') : $(document.body);
            $container.html(handler.config.template);
            handler.view = $container.children()[0];
            ko.applyBindings(handler.config.viewModel, handler.view);
        }
    });
});
*/
ko.applyBindings({ router: router }, document.body);

// just for use in developer tools
window.ko = ko;