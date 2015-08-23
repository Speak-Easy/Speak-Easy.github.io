'use strict';
Parse.initialize("aS5JfOEzT7lLooye3NQCzkFQagbUXaQVhKX24wnE", "IJxIYp2hyjYPylufvFOiwEGOjkkjqVqg7zz1khAc");

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

function joinWaitlist(emailAddress) {

  Parse.Cloud.run('JoinWaitlist', {email:emailAddress}, {
    success: function(result) {
      alert("Success")
      // TODO Handle success
    },
    error: function(e) {
      alert(e.message)
      // TODO Handle errors
    }
  });
}