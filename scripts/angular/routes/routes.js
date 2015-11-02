sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
	templateUrl: 'scripts/angular/views/add-order.html',
	controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
	templateUrl: 'scripts/angular/views/show_orders.html',
	controller: 'ShowOrdersController'
      }).
      otherwise({
	redirectTo: '/AddNewOrder'
      });
}]);
