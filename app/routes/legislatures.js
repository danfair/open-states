import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://openstates.org/api/v1/metadata/?apikey=597b1042c52c4b39b80c58c4d441c38a').then(function(data) {

      var structuredData = Ember.A();
      data.forEach(function(item, i) {
        var tempObj = {};
        tempObj.id = i;
        tempObj.upperChamber = data[i].chambers.upper.name;
        if (data[i].chambers.lower) {
          tempObj.lowerChamber = data[i].chambers.lower.name;
        }
        tempObj.stateName = data[i].name;
        tempObj.stateAbbrev = data[i].abbreviation.toUpperCase();
        structuredData.pushObject(Ember.Object.create(tempObj));
      });
      return structuredData;
    });
  }
});

// params.state_id
