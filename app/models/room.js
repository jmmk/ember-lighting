var Room = DS.Model.extend({
  lights: DS.hasMany('light'),
  name: DS.attr('string'),
  sections: DS.hasMany('section')
});

Room.FIXTURES = [
  { 'id': 1, 'name': 'Main', 'sections': 2, 'lights': 1 },
  { 'id': 2, 'name': 'Sideyard', 'sections': 2, 'lights': 2 },
  { 'id': 3, 'name': 'Backyard', 'sections': 2, 'lights': 3 },
  { 'id': 4, 'name': 'Guest Bath', 'sections': [1, 3], 'lights': 4 },
  { 'id': 5, 'name': 'Master Bath', 'sections': [1, 3], 'lights': 5 },
  { 'id': 6, 'name': 'Master Bedroom', 'sections': 1, 'lights': 6 }
]

export default Room;