define(function (require) {
  require(['text!plugins/openshift-kibana/partials/header.html'], function (header) {
    var kibana = require('modules').get('kibana');
    kibana.directive('navbarStaticTop', function() {
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
    kibana.directive('subnav', function() {
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
    kibana.directive('kibana', function ($location, $compile, $parse, $timeout) {
      return {
        link: function (scope, element, attrs) {
          element.prepend($compile(header)(scope));
        }
      };
    });
  });

});
