var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('rooms');
  }
});

export default IndexRoute;
