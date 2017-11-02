/**
 * Created by Taimoor on 6/30/2015.
 */

(function () {

    angular.module("myApp")
        .controller('ViewController', [ViewController]);

    function ViewController() {
        var vm = this;
        vm.burgers = [
            {
                name : "Chicken Burger",
                price : 200,
                item : "Half kg"
            },
            {
                name : "Chicken Crispy",
                price : 200,
                item : "Half kg"
            },
            {
                name : "Beef Burger",
                price : 200,
                item : "Half kg"
            },
            {
                name : "Spicy Beef Burger",
                price : 200,
                item : "Half kg"
            },
            {
                name : "Special Beef Burger",
                price : 200,
                item : "Half kg"
            }
        ];
        vm.rolls = [
            {
                name : "Chicken Chatni Roll",
                price : 150,
                item : "1"
            },
            {
                name : "Chicken Crispy Roll",
                price : 150,
                item : "1"
            },
            {
                name : "Beef behari Roll",
                price : 150,
                item : "1"
            },
            {
                name : "Broast Roll",
                price : 150,
                item : "1"
            },
            {
                name : "Mayo Garlic",
                price : 150,
                item : "1"
            }
        ];
        vm.bbq = [
            {
                name : "Chicken Tikka",
                price : 220,
                item : "1"
            },
            {
                name : "Chicken  Malai Tikka",
                price : 250,
                item : "1"
            },
            {
                name : "Chicken  Bihari Tikka",
                price : 260,
                item : "1"
            },
            {
                name : "Beef KABAB",
                price : 300,
                item : "1"
            },
            {
                name : "Beef Behari Boti",
                price : 450,
                item : "1"
            }
        ];
        vm.sandwiches = [
            {
                name : "Chicken Sandwich",
                price : 200
            },
            {
                name : "Chicken Club Crispy",
                price : 250
            }
        ];

        vm.addToCart = function (food) {

            var arr = [];

            arr = JSON.parse(localStorage.getItem("cart"));

            if(!arr){
                arr = [];
            }

            delete food.$$hashKey;
            arr.push(food);

            localStorage.setItem("cart", JSON.stringify(arr));

            // var myArr = JSON.parse(localStorage.getItem("cart"));


        };
        // var user = firebase.auth().currentUser;
        // console.log(user);
    }
})();