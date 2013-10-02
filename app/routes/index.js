var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('lights');
  }
});

export default IndexRoute;
