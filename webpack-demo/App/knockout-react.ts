import * as ko from "knockout";
import * as React from "react";

/* 
    Knockout binding handler which renders a React component.
*/
var knockoutReactHandler: KnockoutBindingHandler = {
    init: function (_, valueAccessor, __, ___, bindingContext: any) {
        return { controlsDescendantBindings: true }
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        let Component = valueAccessor();
        let route = bindingContext["$route"];
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

ko.bindingHandlers["reactComponent"] = knockoutReactHandler;

