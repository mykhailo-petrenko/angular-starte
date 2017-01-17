import angular from 'angular';
import appDirective from './appDirective';

export default angular.module('AngularStarterApp.app', [])
    .directive('app', appDirective);