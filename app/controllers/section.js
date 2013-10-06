var SectionController = Ember.ObjectController.extend({
  allOnObserver: function() {
    var rooms = this.get('rooms');
    var allOn = true;
    rooms.forEach(function(room) {
      if(room.get('numberOfLights') !== room.get('lightsOn')) {
        allOn = false;
        return;
      }
    })
    this.set('allOn', allOn);
  }.observes('rooms.@each.numberOfLights', 'rooms.@each.lightsOn'),

  allOffObserver: function() {
    var rooms = this.get('rooms');
    var allOff = true;
    rooms.forEach(function(room) {
      if(room.get('lightsOn') > 0) {
        allOff = false;
        return;
      }
    })
    this.set('allOff', allOff);
  }.observes('rooms.@each.numberOfLights', 'rooms.@each.lightsOn'),

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

export default SectionController;
