(function () {
    'use strict';
    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController($scope) {
        $scope.cards = [
            {
                title: 'Audi TT 2015 commercial survey',
                number: 507
            },
            {
                title: 'HTML & SASS Roxx',
                number: 208
            },
            {
                title: 'Nissan Sport for life',
                number: 123
            }
        ];
    }
})();