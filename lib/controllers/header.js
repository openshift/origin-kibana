define(function (require) {
  var kibana = require('modules').get('kibana');
  kibana.controller('OSHeaderController', function ($scope, UserStore, $location) {
    var user = UserStore.getUser();
    $scope.containerName = user.container_name ? user.container_name : 'Untitled Container';
    $scope.goBack = user.back_url;
  });
});
