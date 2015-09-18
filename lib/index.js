define(function (require) {
  require('css!plugins/origin-kibana/styles/main.css');
  require('plugins/origin-kibana/controllers/header');
  require('plugins/origin-kibana/directives/kibana');
  require('plugins/origin-kibana/services/logger');
  require('plugins/origin-kibana/services/userstore');
  require('plugins/origin-kibana/services/auth');
});
