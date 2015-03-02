import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('legislatures', { path: 'legislatures' });
  this.route('legislators', { path: 'legislators' });
  this.resource('legislation', { path: 'legislation' }, function() {
    this.route('state', { path: ":state_id"});
  });
});

export default Router;
