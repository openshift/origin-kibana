define(function (require) {
  var plugin = require('modules').get('plugins/openshift-kibana');
  var qs = require('utils/query_string');
  plugin.provider('AuthService', function () {
    this.$get = function ($location, UserStore) {
      return {
        stashToken: function () {
          // TODO just so other code kinda behaves the same
          var user = UserStore.getUser();
          if ('auth_token' in user) {
            UserStore.setToken(user.auth_token);
          }
        },
        setAuthorization: function (config) {
          config.headers.Authorization = 'Bearer ' + UserStore.getToken();
        },
        hasAuthorization: function (config) {
          return config.headers.Authorization || false;
        }
      };
    };
  });
  plugin.factory('AuthInterceptor', ['AuthService', function (AuthService) {
    return {
      request: function (config) {
        AuthService.stashToken();
        if (!AuthService.hasAuthorization(config)) {
          AuthService.setAuthorization(config);
        }
        return config;
      }
    };
  }]);
  plugin.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });
});
