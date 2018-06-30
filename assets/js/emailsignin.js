function signUp() {
  event.preventDefault();

var userEmail = document.getElementById("InputEmail").value;
var userPass = document.getElementById("InputPass").value;

firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

}

function login() {
  event.preventDefault();

var userEmail = document.getElementById("InputEmail1").value;
var userPass = document.getElementById("InputPass1").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

}


