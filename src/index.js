import angular from 'angular';
import App from './components/app';

angular.module('AngularStarterApp', [App.name]);

angular.bootstrap(window.document, ['AngularStarterApp']);