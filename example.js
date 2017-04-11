angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;



  $scope.items = ['Item 1', 'Item 2', 'Item 3'];



  $scope.continue =function(){
    $scope.status.isFirstOpen = false;
    $scope.status.SecondOpen = true;

  }
$scope.next=function(){
    $scope.status.isFirstOpen = false;
    $scope.status.SecondOpen = false;
    $scope.status.thirdOpen = true;

}
  $scope.status = {
    isFirstOpen: true,
    SecondOpen:false,
    thirdOpen:false
  };
});
