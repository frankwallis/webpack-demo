/// <reference path="../typings/react/react.d.ts" />

// hack for tests until the declarations get sorted out for v0.14
declare var require: (string) => any;
declare module "react-test-utils" {
    import * as testUtils from "react/addons";
    export = testUtils.addons.TestUtils;
}