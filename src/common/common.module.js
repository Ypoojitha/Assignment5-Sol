(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://pkk0412.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
