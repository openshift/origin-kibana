define(['require'], function (require) {
  const plugin = require('ui/modules').get('kibana');
  
  plugin.provider('Logger', function () {
    _level = function() {
       return localStorage['OpenShiftLogLevel.main']||'error';
    };
    var _logger = {
        log: function(msg) {
           console.log(msg);
        },
        info: function(msg) {
            if (_level() === 'info') {
                console.log('[INFO] ', msg);
            }
        },
        debug: function(msg) {
            if (_level() === 'debug') {
                console.log('[DEBUG] ', msg);
            }
        },
        warn: function(msg) {
            if (_level() === 'warn') {
                console.log('[WARN] ', msg);
            }
        },
        error: function(msg) {
            if (_level() === 'error') {
                console.log('[ERROR] ', msg);
            }
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


