// import Light from '/appkit/models/light';

var LightsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('light');
  }
});

export default LightsRoute;