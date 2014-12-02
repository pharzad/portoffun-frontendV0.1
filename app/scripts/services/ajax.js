'use strict';
app.service('ajax', function ($http)
{
	var server = 'http://localhost:8080/api/';
	this.getEvents = function ()
	{
		return $http.get(server+'events', {
			cache: false
		}).then(function (result)
		{
			return result.data;
		});
	};
        this.getEventById = function (eventId)
	{
		return $http.get(server+'events/'+eventId, {
			cache: false
		}).then(function (result)
		{
			return result.data;
		});
	};
        this.sendRoleRequest = function (userId,rollName,eventName,rollId,eventId)
	{
		return $http.put(server+'users/submitRole', 
			
                        {
                            userId:userId,
                            rollName:rollName,
                            eventName:eventName,
                            rollId:rollId,
                            eventId:eventId
                        }
		).then(function (result)
		{
			return result.data;
		});
	}
        	this.getUserInfo = function (uId)
	{
		return $http.get(server+'users/'+uId, {
			cache: false
		}).then(function (result)
		{
			return result.data;
		});
	};;

});