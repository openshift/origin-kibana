# origin-kibana
This repo provide a plugin to the Kibana Visualization tool to 
add OpenShift specific requirements.  The main features added
by this plugin are:

* Origin skinning

###
Overriding Styles
The plugin adds an empty stylesheet `$PLUGIN/public/styles/overrides.css' as a hook
for users to modify the styles.  After deployment, you might wish to modify the header
style to include a custer header logo:

```
.container-brand {
  margin-top: 3px;
  height: 11px;
  background-image: url("../images/my-custom-image.svg");
  background-size: 111px 11px;
  background-repeat: no-repeat;
}
```
This stylesheet is loaded after the main stylesheet provided by the plugin.

Currently compatible with the 4.5.x code stream of Kibana

### Hacking the code
* Run `npm install` to install node dependencies
* Run `bower install` to install patternfly locally
* Run `grunt` to build main.css
* Copy the contents of the `dist` directory to `<KIBANA_4.5_HOME>/installedPlugins/origin-kibana`
* Start Kibana

### Current supported fragment parameters
When linking to kibana with the origin-kibana plugin you can control the container name and link back to the main console by setting the following parameters in the document hash:

* `console_container_name` - Used to set the container name text in the header
* `console_back_url` - Used as the URL in the back link to get back to the main console
* `console_auth_token` - Contains the authorization token for the user logged into the main console

Any parameter in the document hash prefixed with `console_` will be removed from the document hash once the UI is loaded.

To test it out you can access the kibana console with a URL like:

```
http://localhost:5601/#/dashboard#console_container_name=cookies&console_back_url=http:%2F%2Flocalhost:8443&console_auth_token=wheetoken
```

Which will modify the UI to:

![Kibana OpenShift UI Mod](console.png)
