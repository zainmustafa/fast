/**
 * Created by Taimoor on 6/30/2015.
 */



(function () {

    angular.module("myApp")
        .controller("SignupController", ['UserService', '$state',SignupController]);

    function SignupController(UserService,$state) {
        var vm = this;

        // var check = UserService.checkUser();
        // if(check) {
        //     console.log("session");
        //     $state.go('dashboard');
        // }


        this.email =  "";
        this.password =  "";
        this.name = "";


        this.userSignUp = function() {

            firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            }).then(function (data, error) {
                console.log("User Registered!!");


                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        console.log(user.uid);
                        firebase.database().ref('users/' + user.uid).set({
                            username: vm.name,
                            email: vm.email
                        });
                        $state.go('dashboard');

                        // User is signed in.
                    } else {
                        // No user is signed in.
                    }
                });

            });

        }
    }

})();