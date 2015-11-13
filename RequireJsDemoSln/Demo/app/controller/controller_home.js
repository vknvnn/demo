define(['app'], function (app) {
    app.controller('HomeCtrl', function ($scope) {
        var val = {a: '1'};
        console.log('home controller load', _.isUndefined(val.a), $('#versionHidden').val(), angular.version);
        
        
        $scope.message = "Message from HomeCtrl ccc";
    });
});