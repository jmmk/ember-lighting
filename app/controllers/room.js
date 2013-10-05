var RoomController = Ember.ObjectController.extend({
  numberOfLights: function() {
    return this.get('lights.length');
  }.property('lights.length'),

  lightsOn: function() {
    var lights = this.get('lights');
    return lights.filterBy('isOn', true).get('length');
  }.property('lights.@each.isOn')
});

export default RoomController;
