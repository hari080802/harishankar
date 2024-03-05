angular.module('weatherApp', [])
  .controller('WeatherController', function() {
    this.city = 'Sample City';
    this.country = 'Sample Country';
    this.temperature = '25';
    this.humidity = '70';
    this.windSpeed = '3';
    this.weather = 'Partly Cloudy';
  });
