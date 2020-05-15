const config = require('./config.js');
define(['require'], function (require) {
  const plugin = require('ui/modules').get('kibana');
  plugin.controller('OSHeaderController', ['$scope', function ($scope) {
    $scope.logoutUrl = config.logoutUrl
  }]);
});
