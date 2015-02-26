import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('todos', { path: '/' }, function() {
  //   this.route('active');
  //   this.route('complete');
  // });
  this.route('legislatures', { path: '/legislatures' });
  this.route('legislators', { path: '/legislators' });
  this.route('legislation', { path: '/legislation' }, function() {
    this.route('state', { path: "/:state"});
  });
});

export default Router;
