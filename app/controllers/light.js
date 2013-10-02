var LightController = Ember.ObjectController.extend({
  actions: {
    toggle: function(light) {

      light.set('isOn', !light.get('isOn'));
    }
  }
});

export default LightController;