angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.emergencyNumbers', {
    url: '/emergencynumbers',
    views: {
      'tab4': {
        templateUrl: 'templates/emergencyNumbers.html',
        controller: 'emergencyNumbersCtrl'
      }
    }
  })

  .state('tabsController.pharmacies', {
    url: '/pharmaciesmap',
    views: {
      'tab2': {
        templateUrl: 'templates/pharmacies.html',
        controller: 'pharmaciesCtrl'
      }
    }
  })

  .state('tabsController.medicines', {
    url: '/medicines',
    views: {
      'tab3': {
        templateUrl: 'templates/medicines.html',
        controller: 'medicinesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('medicine', {
    url: '/medicines',
    templateUrl: 'templates/medicine.html',
    controller: 'medicineCtrl'
  })

$urlRouterProvider.otherwise('/page1/home')

  

});