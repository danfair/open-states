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
  this.resource('legislators', { path: '/legislators' }, function() {
    this.route('state');
  });
  this.route('legislation', { path: '/legislation' });
});

export default Router;
