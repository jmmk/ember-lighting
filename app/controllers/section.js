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

export default SectionController;
