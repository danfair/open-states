import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['state'],
  state: null,
  list: null,
  party: null,
  parties: null,

  inputDidChange: function() {
    var that = this;

      // var partyParam = that.get('party') === undefined || that.get('party') === null ? '' : '&party=' + that.get('party');
      var params = that.get('state') === undefined || that.get('state') === null ? '&state=al' : '&state=' + that.get('state');
      that.getData(params).then(function(data) {
        that.updateParties(data);
        that.alphaByLastName(data);
        that.filterList(data);
      });
  }.observes('state', 'party'),

  updateParties: function(data) {
    var that = this;
    var allPartiesArray = Ember.A();

    if (data) {
      for (var i = 0; i < data.length; i++) {
        allPartiesArray[i] = data[i].party;
      }
    }

    that.set('parties', allPartiesArray.uniq());
    if (!that.get('party')) { that.set('party', allPartiesArray[0]); }
  },

  filterList: function(data) {
    if (this.get('parties').indexOf(this.get('party')) < 0) {
      this.set('list', data.filterBy('party', this.get('parties')[0]));
    } else {
      this.set('list', data.filterBy('party', this.get('party')));
    }
  },

  getData: function(params) {
    return Ember.$.getJSON('http://openstates.org/api/v1/legislators/?apikey=597b1042c52c4b39b80c58c4d441c38a&active=true' + params);
  },

  alphaByLastName: function(data) {
    data.sort(function (a, b) {
      return a.last_name.localeCompare(b.last_name);
    });
    return data;
  }
});
