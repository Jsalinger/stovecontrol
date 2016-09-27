angular.module('app.services', ['ngResource'])

.factory('StoveTemperature', ['$resource',
  function($resource){
    return $resource('http://192.168.0.40/get/temperature', {}, {
      query: {method:'GET', params:null, isArray:false}
    });
  }])
  
.factory('StoveVoltage', ['$resource',
  function($resource){
    return $resource('http://192.168.0.40/get/voltage', {}, {
      query: {method:'GET', params:null, isArray:false}
    });
  }])
  
.factory('StoveStatus', ['$resource',
  function($resource){
    return $resource('http://192.168.0.40/digital/6', {}, {
      query: {method:'GET', params:null, isArray:false}
    });
  }])  
  
.factory('StoveOn', ['$resource',
  function($resource){
    return $resource('http://192.168.0.40/digital/6/1', {}, {
      query: {method:'GET', params:null, isArray:false}
    });
  }])  
  
.factory('StoveOff', ['$resource',
  function($resource){
    return $resource('http://192.168.0.40/digital/6/0', {}, {
      query: {method:'GET', params:null, isArray:false}
    });
  }]);    