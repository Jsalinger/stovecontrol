angular.module('app.controllers', [])

    .controller('stoveControlCtrl', ['$scope', '$q', 'StoveStatus', 'StoveOn', 'StoveOff',
            
        function ($scope, $q, StoveStatus, StoveOn, StoveOff) {
            
            $scope.init = function () {
                $q.all([
                    StoveStatus.query().$promise
                ]).then(function (data) {
                    if (data[0].return_value == "1") {
                        $scope.stoveStatusEnglish = "On";
                        $scope.stoveImage = "on.jpg";
                    }
                    else {
                        $scope.stoveStatusEnglish = "Off";
                        $scope.stoveImage = "off.jpg";                        
                    }
                });
            }
            
            $scope.stoveOn = function () {
                $q.all([
                    StoveOn.query().$promise,
                    StoveStatus.query().$promise
                ]).then(function (data) {
                    if (data[1].return_value == "1") {
                        $scope.stoveStatusEnglish = "On";
                        $scope.stoveImage = "on.jpg";                        
                    }
                    else {
                        $scope.stoveStatusEnglish = "Off";
                        $scope.stoveImage = "off.jpg";                        
                    }
                });
            }

            $scope.stoveOff = function () {
                $q.all([
                    StoveOff.query().$promise,
                    StoveStatus.query().$promise
                ]).then(function (data) {
                    if (data[1].return_value == "1") {
                        $scope.stoveStatusEnglish = "On";
                        $scope.stoveImage = "on.jpg";                        
                    }
                    else {
                        $scope.stoveStatusEnglish = "Off";
                        $scope.stoveImage = "off.jpg";                        
                    }
                });
            }
        }])

    .controller('temperatureCtrl', ['$scope', 'StoveTemperature',
        function ($scope, StoveTemperature) {
            $scope.stoveTemperatureReading = StoveTemperature.query();
        }])

    .controller('voltageCtrl', ['$scope', 'StoveVoltage',
        function ($scope, StoveVoltage) {
            $scope.stoveVoltageReading = StoveVoltage.query();
        }]);
    
    
    