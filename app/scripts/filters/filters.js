"use strict";
angular.module('pofFilters', []).filter('person', function ()
{

	return function (input)
	{
            
            
		var length = input.length;
		switch (length)
		{
			case (length>1):
				return 'Persons attending';
				break
			case (1):
				return 'person attending';
				break
			case (0):
				return 'Be the first one to attend';
				break
			default:
				'No information availbe contact us';
		}

	};
})
.filter('rolls', function ()
{

	return function (input)
	{
            if (input.length===0){
                return 'No roll availble right now';
            }
            else{
                var availbleRoll=0;
            angular.forEach(input,function(roll){
               if (roll.assignees===''){
                   availbleRoll++;
               }
            });
            if (availbleRoll===0)
            {
                return 'All roles are filled';
            }
            else
            {
                return availbleRoll+' roles availble';
            }
        }

	};
});