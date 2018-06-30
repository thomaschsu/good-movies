// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnBB7K1x-2rGzwngazfbBY4K7vCfjQuzE",
    authDomain: "group-5-project-1.firebaseapp.com",
    databaseURL: "https://group-5-project-1.firebaseio.com",
    projectId: "group-5-project-1",
    storageBucket: "",
    messagingSenderId: "522365895035"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    }
  };


  firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
  .then(function() {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
  })
  .catch(function(error) {
    // Some error occurred, you can inspect the code: error.code
  });





var dataRef = firebase.database();

// On Click event associated with the submit-button function
$("#signUp").on("click", function(event) {
    event.preventDefault();

// Grab user input
var name = $("#InputName").val().trim();
var email = $("#InputEmail").val().trim();

// Code to push to firebase
dataRef.ref().push({
    name: name,
    email: email,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
// Alert
alert("New User sucessfully added");

});

// Firebase watcher + initial loader
dataRef.ref().on("child_added", function(childSnapshot) {

// Logs everything to the console
console.log(childSnapshot.val().name);
console.log(childSnapshot.val().email);
console.log(childSnapshot.val().joinDate);




// Clears the text boxes
$("#InputName").val("");
$("#InputEmail").val("");

});

// On Click event associated wth the sign in
$("signIn").on("click", function(event) {
    event.preventDefault();

// Grab user input
var signinEmail = $("#InputEmail1").val().trim();



})