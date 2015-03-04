import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://openstates.org/api/v1/bills/?apikey=597b1042c52c4b39b80c58c4d441c38a&state=' + params.state_id);
  }
});
