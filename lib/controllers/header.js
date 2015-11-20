define(['require'], function (require) {
  var plugin = require('modules').get('origin-kibana');
  plugin.controller('OSHeaderController', function ($scope, UserStore, $location) {
    var user = UserStore.getUser();
    $scope.containerName = user.container_name ? user.container_name : 'Untitled Container';
    $scope.goBack = user.back_url;
  });
});
