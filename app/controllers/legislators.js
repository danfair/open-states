import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['state'],
  state: null,
  list: null,
  party: null,

  stateDidChange: function() {
    var that = this;
    var partyParam = that.get('party') === 'All' || null ? '' : '&party=' + that.get('party');
    var stateParam = that.get('state') === 'All' || null ? '' : '&state=' + that.get('state');
    Ember.$.getJSON('http://openstates.org/api/v1/legislators/?apikey=597b1042c52c4b39b80c58c4d441c38a&active=true' + stateParam + partyParam).then(function(data) {
      that.set('list', data);
    });
  }.observes('state', 'party')
});
