import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    this.set('state', params.state_id);
  },

  setupController: function(controller, model) {
    controller.set('state', this.get('state'));
  }
});
