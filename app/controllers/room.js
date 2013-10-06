var RoomController = Ember.ObjectController.extend({
  numberOfLightsObserver: function() {
    var lights = this.get('lights');
    var numberOfLights = lights.get('length');
    this.set('numberOfLights', numberOfLights);
  }.observes('lights.length'),

  lightsOnObserver: function() {
    var lights = this.get('lights');
    var lightsOn = lights.filterBy('isOn', true).get('length');
    this.set('lightsOn', lightsOn);
  }.observes('lights.@each.isOn')
});

export default RoomController;
