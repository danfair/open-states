import Ember from 'ember';

export default Ember.Controller.extend({
  list: null,
  searchTerm: null,
  state: null,

  stateDidChange: function() {
    this._super();
    var that = this;
    var searchParam = this.get('searchTerm') ? '&q=' + this.get('searchTerm') : '';
    Ember.$.getJSON('http://openstates.org/api/v1/bills/?apikey=597b1042c52c4b39b80c58c4d441c38a&state=' + this.get('state') + searchParam).then(function(data) {
      that.set('list', data);
    });
  }.observes('state'),

  searchTermDidChange: function() {
    // var that = this;
    // this.set('list', this.get('list').filterBy(function(item) {
    //     var match = item.title.indexOf(this.get('searchTerm')) > -1;
    //     console.log('match = ' + match + ', ' + that);
    // }));
    //this.set('list', data.filterBy('party', this.get('party')));
    console.log(this.get('searchTerm'));
  }.observes('searchTerm'),

  actions: {
    search: function(searchText) {
      this.set('searchTerm', searchText);
    }
  }
});
