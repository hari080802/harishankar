angular.module('weatherApp', [])
    .controller('WeatherController', function($scope, $http) {
        $scope.getWeather = function() {
            var apiKey = 'YOUR_API_KEY';
            var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
            var location = $scope.location;

            $http.get(apiUrl, {
                params: {
                    q: location,
                    appid: apiKey,
                    units: 'metric' // Use Celsius
                }
            }).then(function(response) {
                $scope.weatherData = response.data;
            }).catch(function(error) {
                $scope.errorMessage = 'Error fetching weather data. Please try again.';
            });
        };
    });
