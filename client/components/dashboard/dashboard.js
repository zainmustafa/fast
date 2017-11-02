/**
 * Created by taimoortariqdev on 3/4/2017.
 */


/**
 * Created by Taimoor on 6/30/2015.
 */



(function () {

    angular.module("myApp")
        .controller("DashboardController", ['$state', '$timeout'/*, '$mdSidenav'*/,DashboardController]);

    function DashboardController($state, $timeout) {
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

       /* this.toggleLeft = buildToggler('left');
        this.toggleRight = buildToggler('right');
        this.CustomerView = false;
        this.CustomerViewForOrder = true;
        this.productName = "";
        this.productQuantity = 0;
        this.dateToDeliver = 0;
        this.customerOrders = [{}];
        this.products = [];

        /!*Get User Session*!/

        function allStorage() {

            var values = [],
                keys = Object.keys(localStorage),
                i = keys.length;

            while ( i-- ) {
                values.push( localStorage.getItem(keys[i]) );
            }

            return values;
        }

        var arr = allStorage();

        if(arr.length)
            var myObj = JSON.parse(arr[1]);
        if(firebase.auth().currentUser){
            this.user = firebase.auth().currentUser.uid;
        }
        else {
            debugger;
            if(myObj){
                this.user = myObj.uid
            }else {
                $state.go('login');
            }
        }


        console.log("USER"+this.user);

        function buildToggler(componentId) {
            return function() {
               // $mdSidenav(componentId).toggle();
            };
        }

        this.incrementCustomerOrder = function () {
            vm.customerOrders.push({
                productName: vm.productName,
                productQuantity: vm.productQuantity,
                dateToDeliver: vm.dateToDeliver
            });
        };

        this.logout = function () {
            firebase.auth().signOut().then(function() {
                console.log('Signed Out');
                $state.go('login');

            }, function(error) {
                console.error('Sign Out Error', error);
            });
        };

        this.customers = function () {
            console.log("Customers");
            this.CustomerViewForOrder = false;
            this.CustomerView = !this.CustomerView;

        };

        this.customersView = function () {
            console.log("ADD Fields");
            this.CustomerView = false;
                this.CustomerViewForOrder = !this.CustomerViewForOrder;
        };

        this.admin = function() {
            console.log("admin");
        };

        this.placeOrder = function() {
            console.log("place order");
            console.log(vm.customerOrders);
            for(var i = 0; i < vm.customerOrders.length; i++)
                firebase.database().ref('orders/' + vm.user+'/').push(vm.customerOrders[i])


            this.CustomerViewForOrder = false;
            this.CustomerView = true;
        };


        //Firebase Pull Work


        var orderRef = firebase.database().ref('orders/' + vm.user + '/');

            orderRef.on('value', function(snapshot) {
                snapshot.forEach(function (snap) {
                    console.log(snap.val());
                    console.log(snap.key);
                    vm.products.push(snap.val());

                })
            });



        var userNmaeRef = firebase.database().ref('users/' + vm.user + '/');
        userNmaeRef.on('value', function(snapshot) {

            console.log(snapshot.val());
            console.log(snapshot.key);

        });*/

    }

})();