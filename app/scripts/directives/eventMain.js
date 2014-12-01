'use strict';
app.directive('eventMain', function ()
{
	return {
		templateUrl: 'views/templates/eventMain.html',
		scope: {
			item: '=eventMain'
		},
		link: function (scope)
		{
			if (scope.item.venue.name === "")
			{
				scope.item.venue.name === "This event needs host";
			}
			console.log(scope.item);
		}
	};
});