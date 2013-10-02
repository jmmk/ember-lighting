var Light = DS.Model.extend({
  room: DS.attr('string'),
  isOn: DS.attr('boolean')
});

Light.FIXTURES = [
  { 'id': 1, 'room': 'Main', 'isOn': true },
  { 'id': 2, 'room': 'Sideyard', 'isOn': false },
  { 'id': 3, 'room': 'Backyard', 'isOn': false },
  { 'id': 4, 'room': 'Guest Bath', 'isOn': false },
  { 'id': 5, 'room': 'Master Bath', 'isOn': false },
  { 'id': 6, 'room': 'Master Bedroom', 'isOn': false }
]

export default Light;