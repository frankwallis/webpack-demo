declare module 'cherrytree' {
    var _ct_: any;
    export = _ct_;
}

declare module 'cherrytree-for-knockout' {
    var _ct_: any;
    export = _ct_;
}

declare var require: (name: string) => string;

interface ICherrytreeRoute {
    path: string;
    viewModel();    
    template: string | (() => string);
    synchronous?: boolean
    abstract?: boolean;
}