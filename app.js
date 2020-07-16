(function () {
'use strict';
angular.module('NameCalculatorApp',[])
    .controller('NameCalculatorController',function ($scope) {
        $scope.name="";
        $scope.totalLen=0;
        $scope.displayNumeric=function () {
            let totalNameValue=calculateNameLen($scope.name);
            $scope.totalLen=totalNameValue;

        };
        function calculateNameLen(str) {
            var tsValue=0;
            for(var k=0; k<str.length; k++){
                tsValue += str.charCodeAt(k);
            }
            return tsValue;
        };
    });
})();
