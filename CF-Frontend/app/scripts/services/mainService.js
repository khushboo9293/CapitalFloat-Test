'use strict';

/**
 * @ngdoc service
 * @name mdopsApp.societyDetailsService
 * @description
 * # societyDetailsService
 * Service in the mdopsApp.
 */

        
angular.module('cfTestApp').factory('mainService', ['$http', function ($http) {

  var mainService = {};

  mainService.get_combinations = function (data) { 
    console.log(data);
    var url = APIBaseUrl + "getCombinations/?string="+data;
    return $http({
      method: 'GET',
      url: url,
      headers: {'Content-Type': 'application/json'    
                },
    })
  };
  return mainService;
}]);
