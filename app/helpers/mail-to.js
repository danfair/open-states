import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(email, name) {
  return new Ember.Handlebars.SafeString('<a href="mailto:' + email + '">' + name + '</a>');
});
