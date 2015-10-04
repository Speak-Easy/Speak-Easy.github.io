(function() {
	'use strict';

	angular.module('app.jumbotron', ['parseServiceModule', 'ui.bootstrap'])

	.controller('JumbotronController', [
	    '$scope',
	    '$modal', 
	    'parseService', 
	    function($scope, $modal, parseService) {

		    $scope.displayErrorModal = function() {
			var errorModalInstance = $modal.open({
			    animation: true,
			    templateUrl: 'components/jumbotron/modals/errorModal.html',
			    controller: 'ModalInstanceCtrl'
			});
		    };

		    $scope.displaySuccessModal = function() {
			var successModalInstance = $modal.open({
			    animation: true,
			    templateUrl: 'components/jumbotron/modals/successModal.html', 
			    controller: 'ModalInstanceCtrl'
			});
		    };


		    $scope.joinWaitlist = function() {

			var promise = parseService.joinWaitlist($scope.email);

			promise.then(
			     function(success) {
				$scope.displaySuccessModal();
			    },
			    function(error) {
				$scope.displayErrorModal();
			    }
			);
		   };
	    }])

    .controller('ModalInstanceCtrl', [
	'$scope', 
	'$modalInstance',
	function($scope, $modalInstance) {
	    $scope.ok = function() {
		$modalInstance.close();
	    }
	}
    ]);

}());
