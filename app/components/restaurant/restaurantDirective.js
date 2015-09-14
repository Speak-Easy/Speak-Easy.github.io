(function() {
	'use strict';

	angular.module('app.restaurant', [])

	.directive('restaurant', [function() {

		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'components/restaurant/restaurantView.html'
		};
	}]);
}());