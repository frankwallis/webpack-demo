import ko from "knockout";
import React from "react";

/* 
    Knockout binding handler which renders a React component.
*/
ko.bindingHandlers.reactComponent = {
    init: function (_, valueAccessor, __, ___, bindingContext) {
        return { controlsDescendantBindings: true }
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        let Component = valueAccessor();
        let route = bindingContext.$route;
        let router = bindingContext.$root.router;
        let reactElement = React.createElement(Component, {
            link: function () {
                return router.generate.apply(router, arguments);
            },
            params: route.params,
            query: route.query
        });

        React.render(reactElement, element);
    }
}

