(function(){
    'use strict';

    angular.module('scrumboard.demo',[]).controller('ScrumboardController', [ '$scope','$http', ScrumboardController ]);

    function ScrumboardController($scope,$http){
        $scope.person = {
            name: 'Joe',
            age: 35
        };

        $scope.add = function(list, title){
            console.log(list.id);
            var card = {
                list: list.id,
                title: title
            };
            $http.post('/scrumboard/cards/',card).then(function(response){
                list.cards.push(response.data);
            },
            function(response){
                alert('error');
            }
            );
        }
        $scope.data = [];
        $http.get('/scrumboard/list/').then(function(response){
            $scope.data  = response.data;
            console.log(response.data)
        });

    }
}());