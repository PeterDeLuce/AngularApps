angular.module('my-app',[])
		.controller('GuessTheNumberController', GuessTheNumberController);
		function GuessTheNumberController($scope) {
			$scope.makeGuess = function () {
				$scope.deviation = $scope.original - $scope.guess;
                $scope.noOfTries = $scope.noOfTries + 1;

                if ($scope.guess > $scope.deviation){
                    $scope.answerId = '<p>Too low.</p>';
                }
                else if ($scope.guess < $scope.deviation) {
                    $scope.answerId = '<p>Too high.</p>';
                }
                else {
                    $scope.answerId = '<p>Correct!</p>';
                }
			}
			$scope.initializeGame=function() {
				$scope.noOfTries = 0;
				$scope.original = Math.floor((Math.random() * 10) + 1);
				$scope.guess = null;
				$scope.deviation = null;
			}
			$scope.initializeGame();
		}