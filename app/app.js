(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('app', [
	  'ui.bootstrap',
	  'ui.router',
	  'app.jumbotron',
	  'app.about',
	  'app.consumer',
	  'app.restaurant'
	])

	.config(function($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/');

	    $stateProvider
		.state('jumbotron', {
		    url: '/',
		    templateUrl: 'components/jumbotron/jumbotronView.html',
		    controller: 'JumbotronController'
		});

	})

	.controller('AppCtrl', [
	    '$scope', 
	    '$state', 
	    '$location',
	    '$anchorScroll',
	    function($scope, $state, $location, $anchorScroll) {
		$scope.goToTop = function() {
		    $location.hash('top');
		    $anchorScroll();
		};

		$scope.goToAbout = function() {
		    $location.hash('about');
		    $anchorScroll();
		};
		
		$scope.goToHowItWorks = function() {
		    $location.hash('howitworks');
		    $anchorScroll();
		};

		$scope.goToRestaurant = function() {
		    $location.hash('restaurant');
		    $anchorScroll();
		};
	    }
	]);

}());
