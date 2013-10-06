var Room = DS.Model.extend({
  lights: DS.hasMany('light', { async: true }),
  section: DS.belongsTo('section'),

  name: DS.attr('string')
});

Room.FIXTURES = [
  { id: 1, name: 'Main', lights: ['1'] },
  { id: 2, name: 'Sideyard', lights: ['2'] },
  { id: 3, name: 'Backyard', lights: ['3'] },
  { id: 4, name: 'Guest Bath', lights: ['4'] },
  { id: 5, name: 'Master Bath', lights: ['5'] },
  { id: 6, name: 'Master Bedroom', lights: ['6'] }
]

export default Room;
