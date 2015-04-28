import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('menu');
	this.route('hours');
	
	/*this.resource('eng', function() {
		this.resource('/');
	});

	this.resource('fr', function() {
		this.resource('/');
	}); */
}); 


export default Router.map(function() {
});
