﻿import ko from "knockout";
import layoutTemplate from './layout.html';

var layoutRoute = {
    path: "/",
    template: layoutTemplate,
    viewModel: function() {
        // these links populate the navbar
        this.links = [
            { name: "home", title: 'Home', icon: 'home', icon: 'fa fa-home' },
            { name: "details", title: 'Details', icon: 'fa fa-ellipsis-h' }
        ];
    },
    synchronous: true
};

export default layoutRoute;
