angular.module('myApp')
.controller('mainCtrl', function($scope) {
$scope.name = 'Ryan';

$scope.friends = [
  'Frank',
  'Jay',
  'Diane',
  'Jenny',
  'Alex'
];

$scope.addFriend = function (name) {
  $scope.friends.push(name);
  $scope.friendName = '';
}
});
