(function() {
	'use strict';

	angular.module('app.consumer', [])

	.directive('consumer', [function() {
		
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'components/consumer/consumerView.html'
		};
	}]);
}());