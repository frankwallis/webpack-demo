var ko = require("knockout");
var React = require("react");
/*
    Knockout binding handler which renders a React component.
*/
var knockoutReactHandler = {
    init: function (_, valueAccessor, __, ___, bindingContext) {
        return { controlsDescendantBindings: true };
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var Component = valueAccessor();
        var route = bindingContext["$route"];
        var router = bindingContext.$root.router;
        var reactElement = React.createElement(Component, {
            link: function () {
                return router.generate.apply(router, arguments);
            },
            params: route.params,
            query: route.query
        });
        React.render(reactElement, element);
    }
};
ko.bindingHandlers["reactComponent"] = knockoutReactHandler;
//# sourceMappingURL=knockout-react.js.map