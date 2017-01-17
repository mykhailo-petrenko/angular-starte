appDirective.$inject = [];

export default function appDirective() {
    'use strict';
    
    return {
        restrict: 'E',
        template: 'Hello Dolly I`m App'
    };

}