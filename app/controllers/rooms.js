var RoomsController = Ember.ArrayController.extend({
  itemController: 'room',

  totalLightsObserver: function() {
    var count = 0;
    this.forEach(function(room) {
      count += room.get('numberOfLights');
    })
    this.set('totalLights', count);
  }.observes('@each.numberOfLights'),

  totalLightsOnObserver: function() {
    var count = 0;
    this.forEach(function(room) {
      count += room.get('lightsOn');
    })
    this.set('totalLightsOn', count);
  }.observes('@each.lightsOn'),

  totalLightsOff: function() {
    return this.get('totalLights') - this.get('totalLightsOn');
  }.property('totalLights', 'totalLightsOn')
});

export default RoomsController;
