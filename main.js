var firebaseConfig = {
    apiKey: "AIzaSyAMZtg2Xxwx9Zo_s0xbpB5hj1qaAzAt7X8",
    authDomain: "twitter-992d3.firebaseapp.com",
    databaseURL: "https://twitter-992d3.firebaseio.com",
    projectId: "twitter-992d3",
    storageBucket: "twitter-992d3.appspot.com",
    messagingSenderId: "510127775373",
    appId: "1:510127775373:web:0ac4eee10506212d548cc4",
    measurementId: "G-D5XP6QQ8CN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addueser(){
      varaiblename = document.getElementById("addUser").value;
      firebase.database().ref("Class 96").child(varaiblename).update({
      messagetodatabase: "addedsuccessfully",
      name: "Adwait",
      grade : 4 ,
      div :"A" ,
      School :"Symbiosis School Nashik Maharashtra India"
      });
      console.log("usernameis"+varaiblename);
      varaiblemsg = document.getElementById("addmessage").value;
      firebase.database().ref("Class 96").child(varaiblename).child(varaiblemsg).push({
      pushexample : varaiblemsg
    });
    console.log("PushMessage " + varaiblemsg);
      firebase.database().ref("Class 96").child(varaiblename).on("value", function(snapshot){
          console.log(snapshot.val());
      });
  }