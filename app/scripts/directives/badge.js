'use strict';
app.directive('badgeRoll', function ()
{
	return {
		template: '<span class="badge" ng-class={"activeRoll":vacant}><a ng-if="roll.assignees==\'\'" tooltip-placement="top" tooltip="Empty">{{roll.name}}</a><a ng-if="roll.assignees!=\'\'" tooltip-placement="top" tooltip="{{roll.assignees}}">{{roll.name}}</a></span>',
		scope: {
			roll: '=badgeRoll'
		},
		link: function (scope, element, attrs)
		{
			scope.vacant = true;
			if (scope.roll.assignees)
			{
				scope.vacant = false;
			}


		}
	};
});