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
  
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_pahe.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("Room Name -" + Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}