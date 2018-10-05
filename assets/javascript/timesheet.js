
<script src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA1IPXna6a_8Mg3PUv8y5TIP78kyJNMwYc",
    authDomain: "timesheet-a521b.firebaseapp.com",
    databaseURL: "https://timesheet-a521b.firebaseio.com",
    projectId: "timesheet-a521b",
    storageBucket: "timesheet-a521b.appspot.com",
    messagingSenderId: "560500033479"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();

      // Initial Values
      var name = "";
      var role = "";
      var date = 0;
      var rate = 0;
  
      // Capture Button Click
      $("#submit").on("click", function(event) {
        // Don't refresh the page!
        event.preventDefault();
  
        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Don't forget to provide initial data to your Firebase database.
        name = $("#name-input").val().trim();
        role = $("#role-input").val().trim();
        date = $("#date-input").val().trim();
        rate = $("#rate-input").val().trim();
  
        database.ref().push({ //set only replaces use .push
          name: name,
          role: role,
          date: date,
          rate: rate,
          dateAdded: firebase.database.ServerValue.TIMESTAMP

        });
  
      });  
      //on value does everytime an event is changed ...use child_added

      database.ref().on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
  
        // Console.loging the last user's data
        console.log(sv.name);
        console.log(sv.role);
        console.log(sv.date);
        console.log(sv.rate);
  
        // Change the HTML to reflect
        $("#name-display").text(sv.name);
        $("#role-display").text(sv.role);
        $("#date-display").text(sv.date);
        $("#rate-display").text(sv.rate);
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
  

  