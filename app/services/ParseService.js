'use strict';

var parseServiceModule = angular.module('parseServiceModule', [])

.service('parseService', [function() {
    var _parse = Parse.initialize('aS5JfOEzT7lLooye3NQCzkFQagbUXaQVhKX24wnE',
	'IJxIYp2hyjYPylufvFOiwEGOjkkjqVqg7zz1khAc');

    this.joinWaitlist = function(emailAddress) {
	_parse.Cloud.run(
	    'JoinWaitlist', 
	    {email: emailAddress},
	    {
		succes: function(result) {
		    // TODO: Alert user success
		    console.log(result);
		},
		error: function(error) {
		    // TODO: Alert user of failure
		    console.log(result);
		}
	    }
    });


}]);

