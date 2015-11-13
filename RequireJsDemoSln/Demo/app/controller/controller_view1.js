define(['app'], function (app) {
    app.controller('View1Ctrl', ['$scope', '$templateCache', function ($scope, $templateCache) {
        console.log('home View1Ctrl load');
        $scope.message = "Message from View1Ctrl";
        $templateCache.remove('/Home/About');
    }]);
});