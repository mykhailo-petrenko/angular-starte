import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

// import 
import App from './components/app';
import Home from './components/home';
import HelloWorld from './components/helloWorld';
import PageNotFound from './components/pageNotFound';

import './stylesheets/app.scss';

angular
    .module('AngularStarterApp', [
        angularUIRouter, 
        App.name,
        Home.name,
        HelloWorld.name,
        PageNotFound.name
    ])
    .config(['$stateProvider', '$urlRouterProvider',  ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise("/404");

        var Home = {
            name: 'Home',
            url: '/',
            template: '<home />'
        };

        var HelloWorld = {
            name: 'HelloWorld',
            url: '/hello',
            template: '<hello-world />'
        };

        var PageNotFound = {
            name: 'PageNotFound',
            url: '/404',
            template: '<page-not-found />'
        };

        $stateProvider.state(Home);
        $stateProvider.state(HelloWorld);
        $stateProvider.state(PageNotFound);
    }]);