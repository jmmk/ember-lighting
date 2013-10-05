var Section = DS.Model.extend({
  rooms: DS.hasMany('room'),

  name: DS.attr('string')
});

Section.FIXTURES = [
  { id: 1, name: 'All', rooms: ['1', '2', '3', '4', '5', '6'] },
  { id: 2, name: 'Interior', rooms: ['4', '5', '6'] },
  { id: 3, name: 'Exterior', rooms: ['1', '2', '3'] },
  { id: 4, name: 'Bathroom', rooms: ['4', '5'] },
]
export default Section;
