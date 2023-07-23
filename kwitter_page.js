const firebaseConfig = {
    apiKey: "AIzaSyDbQG4KDp-CgutvoHyNUOnbjOEw6jlv8ZM",
    authDomain: "fir-96096.firebaseapp.com",
    databaseURL: "https://fir-96096-default-rtdb.firebaseio.com",
    projectId: "fir-96096",
    storageBucket: "fir-96096.appspot.com",
    messagingSenderId: "127942344264",
    appId: "1:127942344264:web:643160d59538511681e27d"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();