angular.module('my-app',[])
		.controller('GuessTheNumberController', GuessTheNumberController);
		function GuessTheNumberController($scope) {
			$scope.makeGuess = function () {
				$scope.deviation = $scope.original - $scope.guess;
                $scope.noOfTries = $scope.noOfTries + 1;

				 $scope.answerId = angular.module('answerId', []);

                if ($scope.guess > $scope.deviation){
                    $scope.answerId = 'Too low.';
                }
                else if ($scope.guess < $scope.deviation) {
                    $scope.answerId = 'Too high.';
                }
                else {
                    $scope.answerId = 'Correct!';
				}
			}
			$scope.restartGame=function() {
				$scope.noOfTries = 0;
				$scope.original = Math.floor((Math.random() * 10) + 1);
				$scope.guess = null;
				$scope.deviation = null;
			}
			$scope.restartGame();
		}