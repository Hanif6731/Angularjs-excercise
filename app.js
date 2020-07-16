(function () {
'use strict';
angular.module('testAngularApp',[])
    .controller('TestAngularController',function ($scope) {
        $scope.name='Hanif';
        $scope.sayHello=function () {
            return 'Hello Hanif';
        }
    });
})();
