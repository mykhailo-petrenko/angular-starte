import angular from 'angular';

import templateUrl from './Home.html';

const module = angular
    .module('AngularJSStarter.Home', [])
    .component('home', {
        templateUrl
    });

export default module.name;