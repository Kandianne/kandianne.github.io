(function() {
	'use strict';
	angular.module('app', ['ui.router',"ngAnimate", "ngMaterial", 'ui.bootstrap.carousel',  'ui.bootstrap'])
	.config(Config)
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
		.primaryPalette('grey',{
			'default': '100', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
		.accentPalette('grey');
	});
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home', {
			url: '/',
			templateUrl: 'templates/Home.html',
		}).state('Experience',{
			url: '/experience',
			templateUrl: 'templates/experience.html',
		}).state('Skills',{
			url: '/skills',
			templateUrl: 'templates/skills.html',
		}).state('Contact',{
			url: '/contact',
			templateUrl: 'templates/contact.html',
		}).state('Portfolio',{
			templateUrl: 'templates/portfolio.html',
		}).state('Resume',{
			url: '/resume',
			templateUrl: 'templates/resume.html',
		}).state('Projects',{
			url: '/projects',
			templateUrl: 'templates/projects.html',
		}).state('Kreations',{
			url: '/kreations',
			templateUrl: 'templates/kreations.html',
		});
		$urlRouterProvider.otherwise('/');
	}
})();
