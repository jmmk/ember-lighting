var Light = DS.Model.extend({
  room: DS.belongsTo('room'),

  isOn: DS.attr('boolean')
});

Light.FIXTURES = [
  { id: 1, isOn: true, room: '1' },
  { id: 2, isOn: false, room: '2' },
  { id: 3, isOn: false, room: '3' },
  { id: 4, isOn: false, room: '4' },
  { id: 5, isOn: false, room: '5' },
  { id: 6, isOn: false, room: '6' }
]

export default Light;
