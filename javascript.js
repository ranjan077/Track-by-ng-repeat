var app = angular.module('myApp',[]);

app.controller('mycontroller', ['$scope','$filter', function($scope,$filter){
	$scope.persons=[{
		id:1,
		name:"person1"
	},
	{	id:2,
		name:"person2"
	},
	{	id:3,
		name:"person3"
	},
	{	id:4,
		name:"person4"
	}];
	$scope.items=[{
		id:1,
		name:"item1"
	},
	{	id:2,
		name:"item2"
	},
	{	id:3,
		name:"item3"
	},
	{	id:4,
		name:"item4"
	}];

	$scope.rebulidPersons = function(){
		console.log("rebuilding perons...");
		$scope.persons =[{
		id:1,
		name:"person1"
	},
	{	id:2,
		name:"person2"
	},
	{	id:3,
		name:"person3"
	},
	{	id:4,
		name:"person4"
	}]
	}

	$scope.rebulidItems = function(){
		console.log("rebuilding items...");
		$scope.items =[{
		id:1,
		name:"item1"
	},
	{	id:2,
		name:"item2"
	},
	{	id:3,
		name:"item3"
	},
	{	id:4,
		name:"item4"
	}]
	}
	
}]).directive('consoleOutput', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		/*compile: function(tElement, tAttrs){
			console.log(tAttrs.consoleOutput+" dom is created ");
			},*/
		link: function($scope, iElm, iAttrs, controller) {
			console.log(iAttrs.consoleOutput+" dom is created ")
		}
	};
});;