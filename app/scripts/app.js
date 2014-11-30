'use strict';

/**
 * @ngdoc overview
 * @name portoffunFrontendApp
 * @description
 * # portoffunFrontendApp
 *
 * Main module of the application.
 */
var app = angular.module('portoffun', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch','pofFilters','ui.bootstrap']);
app.config(function ($routeProvider)
{
	$routeProvider.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	}).when('/event/:eventId', {
		templateUrl: 'views/event.html',
		controller: 'event'
	}).otherwise(
	{
		redirectTo: '/'
	});
});