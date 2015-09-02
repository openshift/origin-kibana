# openshift-kibana
This repo provide a plugin to the Kibana Visualization tool to 
add OpenShift specific requirements.  The main features added
by this plugin are:

* OpenShift skinning

Currently compatible with the 4.1.x code stream of Kibana

### Hacking the code
* You'll need a local fork of [kibana](https://github.com/elastic/kibana)
* Create a soft link pointing to the root of this repo: `ln -fs . ../kibana/src/kibana/plugins/openshift-kibana`
* Add a reference to openshift-kibana's less file to kibana's Gruntfile.js:

```
    // Put this at the end of the 'lessFiles' array in the config
    ,'<%= plugins %>/openshift-kibana/styles/main.less'
```
* Run kibana in dev mode via `grunt dev --with-es`, the UI should have an extra header above the regular kibana navigation bar.

### Current supported fragment parameters
When linking to kibana with the openshift-kibana plugin you can control the container name and link back to the main console by setting the following parameters in the document hash:

* `openshift_container_name` - Used to set the container name text in the header
* `openshift_back_url` - Used as the URL in the back link to get back to the main console

Any parameter in the document hash prefixed with `openshift_` will be removed from the document hash once the UI is loaded.
