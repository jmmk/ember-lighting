var RoomsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('room');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('sections', this.store.find('section'));
  }
});

export default RoomsRoute;
