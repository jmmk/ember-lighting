define("appkit/adapters/application",
  [],
  function() {
    "use strict";
    var FixtureAdapter = DS.FixtureAdapter.extend();

    return FixtureAdapter;
  });
define("appkit/app",
  ["resolver","appkit/utils/register_components"],
  function(Resolver, registerComponents) {
    "use strict";

    var App = Ember.Application.extend({
      LOG_ACTIVE_GENERATION: true,
      LOG_MODULE_RESOLVER: true,
      LOG_TRANSITIONS: true,
      LOG_TRANSITIONS_INTERNAL: true,
      LOG_VIEW_LOOKUPS: true,
      modulePrefix: 'appkit', // TODO: loaded via config
      Resolver: Resolver
    });

    App.initializer({
      name: 'Register Components',
      initialize: function(container, application) {
        registerComponents(container);
      }
    });



    return App;
  });
define("appkit/controllers/room",
  [],
  function() {
    "use strict";
    var RoomController = Ember.ObjectController.extend({
      numberOfLights: function() {
        return this.get('lights.length');
      }.property('lights.length'),

      lightsOn: function() {
        var lights = this.get('lights');
        return lights.filterBy('isOn', true).get('length');
      }.property('lights.@each.isOn')
    });


    return RoomController;
  });
define("appkit/controllers/rooms",
  [],
  function() {
    "use strict";
    var RoomsController = Ember.ArrayController.extend({
      itemController: 'room',

      totalLights: function() {
        var count = 0;
        this.forEach(function(room) {
          count += room.get('numberOfLights');
        })
        return count;
      }.property('@each.numberOfLights'),

      totalLightsOn: function() {
        var count = 0;
        this.forEach(function(room) {
          count += room.get('lightsOn');
        })
        return count;
      }.property('@each.lightsOn'),

      totalLightsOff: function() {
        return this.get('totalLights') - this.get('totalLightsOn');
      }.property('totalLights', 'totalLightsOn')
    });


    return RoomsController;
  });
define("appkit/controllers/section",
  [],
  function() {
    "use strict";
    var SectionController = Ember.ObjectController.extend({
      actions: {
        turnOn: function(rooms) {
          rooms.content.forEach(function(room) {
            room.get('lights').setEach('isOn', true)
          })
        },
        turnOff: function(rooms) {
          rooms.content.forEach(function(room) {
            room.get('lights').setEach('isOn', false)
          })
        }
      }
    });


    return SectionController;
  });
define("appkit/helpers/log",
  [],
  function() {
    "use strict";
    Ember.Handlebars.helper("log", function(context) {
      return console.log(context);
    });

  });
define("appkit/models/light",
  [],
  function() {
    "use strict";
    var Light = DS.Model.extend({
      room: DS.belongsTo('room'),

      isOn: DS.attr('boolean')
    });

    Light.FIXTURES = [
      { id: 1, isOn: true, room: '1' },
      { id: 2, isOn: false, room: '2' },
      { id: 3, isOn: false, room: '3' },
      { id: 4, isOn: false, room: '4' },
      { id: 5, isOn: false, room: '5' },
      { id: 6, isOn: false, room: '6' }
    ]


    return Light;
  });
define("appkit/models/room",
  [],
  function() {
    "use strict";
    var Room = DS.Model.extend({
      lights: DS.hasMany('light', { async: true }),
      section: DS.belongsTo('section'),

      name: DS.attr('string')
    });

    Room.FIXTURES = [
      { id: 1, name: 'Main', lights: ['1'] },
      { id: 2, name: 'Sideyard', lights: ['2'] },
      { id: 3, name: 'Backyard', lights: ['3'] },
      { id: 4, name: 'Guest Bath', lights: ['4'] },
      { id: 5, name: 'Master Bath', lights: ['5'] },
      { id: 6, name: 'Master Bedroom', lights: ['6'] }
    ]


    return Room;
  });
define("appkit/models/section",
  [],
  function() {
    "use strict";
    var Section = DS.Model.extend({
      rooms: DS.hasMany('room'),

      name: DS.attr('string')
    });

    Section.FIXTURES = [
      { id: 1, name: 'All', rooms: ['1', '2', '3', '4', '5', '6'] },
      { id: 2, name: 'Interior', rooms: ['4', '5', '6'] },
      { id: 3, name: 'Exterior', rooms: ['1', '2', '3'] },
      { id: 4, name: 'Bathroom', rooms: ['4', '5'] },
    ]

    return Section;
  });
define("appkit/router",
  [],
  function() {
    "use strict";
    var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

    Router.map(function(){
      this.route('rooms');
    });


    return Router;
  });
define("appkit/routes/index",
  [],
  function() {
    "use strict";
    var IndexRoute = Ember.Route.extend({
      redirect: function() {
        this.transitionTo('rooms');
      }
    });


    return IndexRoute;
  });
define("appkit/routes/rooms",
  [],
  function() {
    "use strict";
    var RoomsRoute = Ember.Route.extend({
      model: function() {
        return this.store.find('room');
      },
      setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('sections', this.store.find('section'));
      }
    });


    return RoomsRoute;
  });
define("appkit/utils/register_components",
  [],
  function() {
    "use strict";
    /* global requirejs */
    /* global require */

    function registerComponents(container) {
      var seen = requirejs._eak_seen;
      var templates = seen, match;
      if (!templates) { return; }

      for (var prop in templates) {
        if (match = prop.match(/templates\/components\/(.*)$/)) {
          require(prop, null, null, true);
          registerComponent(container, match[1]);
        }
      }
    }


    function registerComponent(container, name) {
      Ember.assert("You provided a template named 'components/" + name + "', but custom components must include a '-'", name.match(/-/));

      var fullName         = 'component:' + name,
          templateFullName = 'template:components/' + name;

      container.injection(fullName, 'layout', templateFullName);

      var Component = container.lookupFactory(fullName);

      if (!Component) {
        container.register(fullName, Ember.Component);
        Component = container.lookupFactory(fullName);
      }

      Ember.Handlebars.helper(name, Component);
    }


    return registerComponents;
  });
//@ sourceMappingURL=app.js.map