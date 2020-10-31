(function () {
  const config = {
    apiKey: "AIzaSyBeCVqj1-BKSUoADp2nlNh_-nbUahH5LPw",
    authDomain: "triv-239f4.firebaseapp.com",
    databaseURL: "https://triv-239f4.firebaseio.com/",
    storageBucket: "gs://triv-239f4.appspot.com",
  };
  firebase.initializeApp(config);

  // Get elements
  const preObject = document.getElementById("object");

  // Create references
  const dbRefObject = firebase.database().ref().child("object");

  // Sync object changes
  dbRefObject.on("value", (snap) => console.log(snap.val()));

  console.log("Hello!!");
})();
