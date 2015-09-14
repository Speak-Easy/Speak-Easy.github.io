(function() {
	'use strict';

	var parseServiceModule = angular.module('parseServiceModule', [])

	.service('parseService', [function(parse) {
	    Parse.initialize('aS5JfOEzT7lLooye3NQCzkFQagbUXaQVhKX24wnE',
		'IJxIYp2hyjYPylufvFOiwEGOjkkjqVqg7zz1khAc');

	    this.joinWaitlist = function(emailAddress) {
			return Parse.Cloud.run('JoinWaitlist', {email: emailAddress}, {});
	    }

	    this.isValidEmail = function(emailAddress) {

	    }

	}]);

}());