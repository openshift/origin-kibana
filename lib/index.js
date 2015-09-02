define(function (require) {
  require('css!plugins/openshift-kibana/styles/main.css');
  require('plugins/openshift-kibana/controllers/header');
  require('plugins/openshift-kibana/directives/kibana');
  require('plugins/openshift-kibana/services/logger');
  require('plugins/openshift-kibana/services/userstore');
  require('plugins/openshift-kibana/services/auth');
});
