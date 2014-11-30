'use strict';

/**
 * @ngdoc function
 * @name portoffunFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portoffunFrontendApp
 */
app.controller('event', function ($scope,ajax,$routeParams)
{
	ajax.getEventById($routeParams.eventId).then(function(res){console.log(res);$scope.event=res;});
        
});