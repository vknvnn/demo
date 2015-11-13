
require.config({

    baseUrl: "app",
    urlArgs: "v=" + document.getElementById("versionHidden").value,

    // alias libraries paths
    paths: {
        'angular': './../Scripts/angular.min',
        'angular-locale': './../Scripts/i18n/angular-locale_en-us',
        'angular-route': './../Scripts/angular-route.min',
        'angular-animate': './../Scripts/angular-animate.min',
        'angularAMD': './../Scripts/angularAMD',
        'jquery': './../Scripts/jquery-1.10.2.min',
        'underscore': './../Scripts/underscore.min',
        'uiBootstrap': './../Scripts/ui-bootstrap-tpls-0.14.3.min',
        'fullCalendar': './../Scripts/fullcalendar.min',
        'uiCalendar': './../Scripts/ui-calendar',
        'moment': './../Scripts/moment.min',
        'uiGrid': './../Scripts/ui-grid.min',
        'kendoUiCore': './../Scripts/kendo.ui.core.min',
        'controller_home': 'controller/controller_home',
        'controller_view1': 'controller/controller_view1',
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-animate': ['angular'],
        'angular-locale': ['angular'],
        'uiBootstrap': {
            deps: ['jquery', 'moment', 'angular']
        },
        'uiCalendar': {
            deps: ['fullCalendar', 'angular']
        },
        'uiGrid': ['angular'],
        'underscore': { exports: '_' },
        'kendoUiCore': {
            deps: ['jquery', 'angular']
        },
        'angular': {
            deps: ["underscore", "jquery"],
            exports: "angular"
        },
    },

    // kick start application
    deps: ['app']
});

require.onResourceLoad = function (context, map, depArray) {
    
};