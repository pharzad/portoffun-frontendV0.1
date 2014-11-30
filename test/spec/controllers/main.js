'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('portoffun'));

  var MainCtrl,
    scope, $location,Ajax;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,ajax,_$location_) {
      $location=_$location_;
      Ajax=ajax;
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should return events', function () {
    expect(Ajax.a).not.toBeNull();
  });
});
