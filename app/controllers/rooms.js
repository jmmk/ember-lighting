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

export default RoomsController;
