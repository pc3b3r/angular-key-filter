(function() {
  'use strict';

  angular
    .module('app-name')
    .filter('KeyFilter', KeyFilter);

  function KeyFilter() {
    return function(input, filter) {
      var output = input;
      if(angular.isDefined(filter)){
        output = _.pick(input, function(value, key) {
          return key.indexOf(filter) > -1;
        });
      }
      return output;
    };
  }
})();
