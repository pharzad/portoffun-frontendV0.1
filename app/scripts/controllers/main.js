'use strict';

/**
 * @ngdoc function
 * @name portoffunFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portoffunFrontendApp
 */
app.controller('MainCtrl', function ($scope, ajax)
{

	ajax.getEvents().then(function(res){$scope.events=res;});
        
        
});