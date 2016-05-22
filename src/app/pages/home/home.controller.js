(function() {
  'use strict';

  angular
    .module('JSONMock.home')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($state, applicationDataService, store, $stateParams) {

    var vm = this;
    vm.login = login;
    vm.create = create;
    vm.description =
      JSON.stringify({
        "name": "JSONMock",
        "description": "The application is designed to mock JSON response",
        "version": "1.0",
        "backend": {
          "github": "https://github.com/tarnawski/JSONMock-backend",
          "endpoint_url": "https://api-jsonmock.herokuapp.com",
          "tehnologies": "PHP, Symfony2, REST API, BDD, TDD, Continous Integration, GIT flow",
          "tools": "Vagrant, Ansible, Docker, docker-compose, Jenkins, Composer, Ant, PHPSpec, Behat, Gherkin, CodeSniffer, PHPLOC, PHP Depend, Copy/Paste Detector,  PHP Mess Detector, GIT, GitHub, Heroku"
        },
        "frontend":{
          "github": "https://github.com/tarnawski/JSONMock-frontend",
          "tehnologies": "JavaScript, AngularJS, HTML, SASS, e2e TESTS, Continous Integration, GIT flow",
          "tools": "Gulp, Protractor, GIT, GitHub, Heroku"
        },
        "author": "Tomasz Tarnawski",
        "contact": "tarnawski27@gmail.com"
      }, null, 4);

    activate();

    function activate(){
      vm.info = $stateParams.message;
    }

    function login(){
      applicationDataService.get({id: vm.appKey},
        function (data) {
          store.set('APP_KEY', data.app_key);
          $state.go('dashboard', { message: 'Login successful'});
      },
        function(error){
          vm.message = error.data.message;
        });
    }

    function create(name){
      var application = {
        name: name
      };
      applicationDataService.save(application, function(data){
        vm.appKey = data.app_key;
        vm.createComplete = true;
      });
    }
  }
})();
