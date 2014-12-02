'use strict';
app.directive('badgeRoll', function (ajax)
{
	return {
		template: '<span class="badge" ng-class={"activeRoll":vacant}><a ng-if="roll.assignees==\'\'" tooltip-placement="top" tooltip="Empty">{{roll.name}}</a><a ng-if="roll.assignees!=\'\'" tooltip-placement="top" tooltip="{{roll.assignees}}">{{roll.name}}</a></span>',
		scope: {
			roll: '=badgeRoll',
			userId: '=userId',
			event: "=event"
		},
		link: function (scope, element, attrs)
		{
			scope.vacant = true;
			if (scope.roll.assignees)
			{
				scope.vacant = false;
			}


			if (scope.vacant)
			{
				ajax.getUserInfo(scope.userId).then(function (res)
				{
					angular.forEach(res.rolls, function (data, index)
					{

						if (data.rollId === scope.roll._id)
						{

							scope.roll.assignees = data.status;
							return;
						}

					});

				});
				element.bind('click', function ()
				{

					if (scope.roll.assignees !== 'pending' || scope.roll.assignees !== 'approved') ajax.sendRoleRequest(scope.userId, scope.roll.name, scope.event.name, scope.roll._id, scope.event._id);
				});

			}
		}

	};
});