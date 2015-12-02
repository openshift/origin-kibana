define(['require','text!plugins/origin-kibana/partials/header.html'], function (require, header) {
    var plugin = require('modules').get('origin-kibana');
    plugin.directive('navbarStaticTop', function() {
      return {
        restrict: 'C',
        link: function(scope, element, attrs) {
          if (element.hasClass('subnav')) {
            return;
          }
          element.addClass('navbar-pf');
          element.removeClass('navbar');
          element.removeClass('navbar-default');
          element.find('.nav.navbar-nav').addClass('navbar-primary');
        }
      }
    });
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
    plugin.directive('kibana', function ($compile) {
      var html = angular.element(header);
      var linkFn = $compile(html);
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          element.prepend(linkFn(scope));
        }
      };
    });
});
