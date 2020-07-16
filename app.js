(function () {
'use strict';
angular.module('MsgApp',[])
    .controller('MsgController', MsgController);


MsgController.$inject=['$scope'];
function MsgController($scope) {
    $scope.name="Hanif";
    $scope.stateOfBeing="Posing";
    $scope.sayMessege=function () {
    return 'Hanif loves coding';
    };
    $scope.givePrize=function () {
        $scope.stateOfBeing="ReceivesAward";
    }


}
})();
