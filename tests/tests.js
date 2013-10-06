define("appkit/tests/helpers/isolated_container",
  ["resolver"],
  function(Resolver) {
    "use strict";

    function isolatedContainer(fullNames) {
      var container = new Ember.Container();
      var resolver = Resolver.create();

      resolver.namespace = {
        modulePrefix: 'appkit'
      };

      for (var i = fullNames.length; i > 0; i--) {
        var fullName = fullNames[i - 1];
        container.register(fullName, resolver.resolve(fullName));
      }

      return container;
    }


    return isolatedContainer;
  });
define("appkit/tests/helpers/start_app",
  ["appkit/app"],
  function(Application) {
    "use strict";

    function startApp(attrs) {
      var App;

      var attributes = Ember.merge({
        // useful Test defaults
        rootElement: '#ember-testing',
        LOG_ACTIVE_GENERATION:false,
        LOG_VIEW_LOOKUPS: false
      }, attrs); // but you can override;

      Ember.run.join(function(){
        App = Application.create(attributes);
        App.setupForTesting();
        App.injectTestHelpers();
      });

      App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

      return App;
    }


    return startApp;
  });
//@ sourceMappingURL=tests.js.map