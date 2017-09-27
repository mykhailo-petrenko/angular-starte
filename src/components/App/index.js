import angular from 'angular';
import templateUrl from './app.html';

const module = angular
    .module('AngularJSStarter.App', [])
    .component('app', {
        templateUrl
    });

export default module.name;