import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['state'],
  state: null,
  list: null,

  stateDidChange: function() {
    var that = this;
    Ember.$.getJSON('http://openstates.org/api/v1/legislators/?apikey=597b1042c52c4b39b80c58c4d441c38a&state=' + that.get('state')).then(function(data) {
      that.set('list', data);
    });
  }.observes('state')
});
