angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.navyr', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/navyr.html',
        controller: 'navyrCtrl'
      }
    }
  })

  .state('menu.miCuenta', {
    url: '/account',
    views: {
      'side-menu21': {
        templateUrl: 'templates/miCuenta.html',
        controller: 'miCuentaCtrl'
      }
    }
  })

  .state('menu.misReservas', {
    url: '/reservation',
    views: {
      'side-menu21': {
        templateUrl: 'templates/misReservas.html',
        controller: 'misReservasCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('signup', {
    url: '/page4',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.configuraciN', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuraciN.html',
        controller: 'configuraciNCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});