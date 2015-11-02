sampleApp.directive('headerDirective', function($rootScope) {
	return {
		restrict : 'E',
		replace : true,
		templateUrl : 'scripts/angular/views/header.html',
		link : function(scope, element, attrs) {
			
		}
	};
});

sampleApp.directive('footerDirective', function($rootScope) {
	return {
		restrict : 'E',
		replace : true,
		transclude : true,
		templateUrl : 'scripts/angular/views/footer.html',
		link : function(scope, element, attrs) {
		}
	};
});