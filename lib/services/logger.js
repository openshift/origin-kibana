define(function (require) {
  var plugin = require('modules').get('plugins/openshift-kibana');
  
  plugin.provider('Logger', function () {
    var _logger = {
        log: function() {
        },
        info: function() {
        },
        debug: function() {
        },
        warn: function() {
        },
        error: function() {
        }
      };
    this.$get = function () {
      return {
        get: function (category) {
          return _logger;
        }
      };
    };
  });
});


