var Light = DS.Model.extend({
  room: DS.belongsTo('room'),
  isOn: DS.attr('boolean')
});

Light.FIXTURES = [
  { 'id': 1, 'room': 1, 'isOn': true },
  { 'id': 2, 'room': 2, 'isOn': false },
  { 'id': 3, 'room': 3, 'isOn': false },
  { 'id': 4, 'room': 4, 'isOn': false },
  { 'id': 5, 'room': 5, 'isOn': false },
  { 'id': 6, 'room': 6, 'isOn': false }
]

export default Light;