(function() {
	'use strict';

	angular.module('app.jumbotron', ['parseServiceModule'])

	.directive('speakeasyJumbotron', 
	['$rootScope', 'parseService', 
	function($rootScope, parseService) {

		var controller = ['$scope', 'parseService', function($scope, parseService) {

			$scope.clearAlert = function() {
				$scope.alertObj = null;
			};

			$scope.displayErrorMessage = function() {
				$scope.alertObj = { 
					type: 'danger',
					msg: 'Please enter a valid email address and try again!'
				};
			};

			$scope.displaySuccessMessage = function() {
				$scope.alertObj = {
					type: 'success',
					msg: 'Success! We\'ll notify you when we launch!'
				};
			};

			$scope.clearAlert();

			$scope.joinWaitlist = function() {

				$scope.clearAlert();

				var promise = parseService.joinWaitlist($scope.email);

				promise.then(
				function(success) {
					$scope.displaySuccessMessage();
				},
				function(error) {
					$scope.displayErrorMessage();
				});
			};
		}];

		return {
			scope: {
				alertObj: '@'
			},
			controller: controller,
			templateUrl: 'components/jumbotron/jumbotronView.html'
		};

	}]);

}());