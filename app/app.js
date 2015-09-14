(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('app', [
	  'ui.bootstrap',
	  'app.jumbotron',
	  'app.about',
	  'app.consumer',
	  'app.restaurant'
	])

	.controller('AppCtrl', ['$scope', function($scope) {
		
	}]);

}());