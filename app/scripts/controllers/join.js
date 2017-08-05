'use strict';

/**
 * @ngdoc function
 * @name chatMeApp.controller:JoinCtrl
 * @description
 * # AboutCtrl
 * Controller of the chatMeApp
 */
angular.module('chatMeApp')
  .controller('JoinCtrl',[ '$scope','$rootScope','$location','Pubnub', function($scope, $rootScope, $location, Pubnub){
$scope.data = {
  username: 'User_' +Math.floor(Math.random() * 1000)
};


$scope.join = function(){
  console.log('Joining...')
  var _ref, _ref1;
  $rootScope.data || ($rootScope.data = {});
  $rootScope.data.username = (_ref = $scope.data) != null ? _ref.username : void 0;
  $rootScope.data.city = (_ref1 = $scope.data) != null ? _ref1.city : void 0;
  $rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__' + $scope.data.username
  console.log($rootScope);

  Pubnub.init({
    subcribe_key: 'sub-c-c46fd496-7660-11e7-afdb-02ee2ddab7fe',
    publish_key: 'pub-c-6124e01e-e2f0-4e5e-aea4-5d637b40546d',
    uuid: $rootScope.data.uuid
  });

  return $location.path('/main');
}
  }]);
