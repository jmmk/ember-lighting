var LightsController = Ember.ArrayController.extend({
  actions: {
    turnOn: function(lights) {
      this.setEach('isOn', true);
    },
    turnOff: function(lights) {
      this.setEach('isOn', false);
    }
  }
});

export default LightsController;