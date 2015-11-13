define(['angularAMD', 'angular-route', 'uiBootstrap', 'uiCalendar', 'uiGrid', 'kendoUiCore'], function (angularAMD) {
    var app = angular.module("app", ['ngRoute', 'ui.bootstrap', 'ui.calendar', 'ui.grid', 'kendo.directives']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", angularAMD.route({
                templateUrl: '/Home/Content',
                controller: 'HomeCtrl',
                controllerUrl: 'controller_home'
            }))
            .when("/about", angularAMD.route({
                templateUrl: '/Home/About',
                controller: 'View1Ctrl',
                controllerUrl: 'controller_view1'
            }))
            .otherwise({ redirectTo: "/home" });
    });
    return angularAMD.bootstrap(app);
});
//sdlfsdflsdjf sdfasdl kfjsdlfasdl fd asdfkl jdfl jlasdkf asd