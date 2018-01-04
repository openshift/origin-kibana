define(['require'], function(require, Logger){
   const plugin = require('ui/modules').get('kibana');
   plugin.directive('body', ['$compile', 'Logger', function($compile, Logger) {
      var logger = Logger.get();
      const html = angular.element(require('./templates/header.html'));
      const linkFn = $compile(html);
      logger.debug('returning OpenShift body directive');
      return {
        restrict: 'E',
        link: function(scope, element, attrs) {
          element.prepend(linkFn(scope));
          if (element.hasClass('subnav')) {
            return;
          }
          element.addClass('navbar-pf');
          element.removeClass('navbar');
          element.removeClass('navbar-default');
          element.find('.nav.navbar-nav').addClass('navbar-primary');
        }
      }
    }]);
    plugin.directive('subnav', function() {
      return {
        restrict: 'C',
        link: function (scope, element, attrs) {
          element.removeClass('navbar');
          element.removeClass('navbar-default');
          element.find('.container-fluid').removeClass('container-fluid');
          element.find('.nav.navbar-nav').addClass('navbar-persistent');
        }
      }
    });
});
