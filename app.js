// (function () {
// 	'use strict';

// 	angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

// 	LunchCheckController.$inject =['$scope'];

// 	function LunchCheckController ($scope){
// 		$scope.name="";
//     $scope.msg="";
// 		$scope.checkLists = function () {
// 			if($scope.name !== '') {
// 				var word = $scope.name.split(',');
// 				var count =0;
// 				for(var i =0; i<word.length; i++){
// 					if(word[i].trim() !=='')
// 						count++;
// 				}
// 				if(count > 0){
// 					if(count <=3){
// 						$scope.msg = 'Enjoy!';
// 					}
// 					else if(count > 3){
// 						$scope.msg = 'Too much!'
// 					}
// 				}
// 				else {
// 						$scope.msg = 'Please enter data first';
// 				}
// 			}
// 			else {
// 				$scope.msg = 'Please enter data first';
// 			}
// 		}

// 	}
// })();

!function(){"use strict";function e(e){e.name="",e.msg="",e.checkLists=function(){if(""!==e.name){for(var n=e.name.split(","),t=0,s=0;s<n.length;s++)""!==n[s].trim()&&t++;t>0?t<=3?e.msg="Enjoy!":t>3&&(e.msg="Too much!"):e.msg="Please enter data first"}else e.msg="Please enter data first"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();




