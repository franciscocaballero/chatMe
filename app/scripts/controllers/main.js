'use strict';

/**
 * @ngdoc function
 * @name chatMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chatMeApp
 */
angular.module('chatMeApp')
  .controller('MainCtrl', ['$scope','$rootScope', '$location','Pubnub' function ($scope,$rootScope,$location,Pubnub){
    var _ref;
    if(!Pubnub.initialized()){
      $location.path('/join');
    }

    $scope.controllerChannel = '__controlchannel';

    $scope.channels = [];

    //Create Channel
    $scope.createChannel = function(){
      var channel;
      console.log('creating channel');
      channel = $scope.newChannel;

      $scope.newChannel = '';

      Pubnub.ngGrant({
        channel: channel,
        read: true,
        write: true,
        callback: function(){
          return console.log(channel + 'All Set', arguments);
        }
      });

      Pubnub.ngGrant({
        channel: channel+ '-pnpres',
        read: true,
        write: false,
        callback: function(){
          return console.log(channel + 'Presence All Set', arguments);
        }
      });
    }
  }]);
