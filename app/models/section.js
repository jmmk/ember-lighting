var Section = DS.Model.extend({
  name: DS.attr('string'),
  rooms: DS.hasMany('room')
});

Section.FIXTURES = [
  { 'id': 1, 'name': 'Interior', 'rooms': [4, 5, 6] },
  { 'id': 2, 'name': 'Exterior', 'rooms': [1, 2, 3] },
  { 'id': 3, 'name': 'Bathroom', 'rooms': [4, 5] },
]
export default Section;