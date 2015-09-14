(function() {
	'use strict';

	angular.module('app.about', [])

	.directive('about', [function(){

		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'components/about/aboutView.html'
		};
	}]);
}());


