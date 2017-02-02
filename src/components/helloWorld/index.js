import angular from 'angular';

export default angular
    .module('AngularStarterApp.helloWorld', [])
    .component('helloWorld', {
        template: 'Im helloWorld'
    });