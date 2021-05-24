
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBXH77jiorA4v0S6vDNu_EZLDiHRL7dR_U",
      authDomain: "kwitter-65c07.firebaseapp.com",
      databaseURL: "https://kwitter-65c07-default-rtdb.firebaseio.com",
      projectId: "kwitter-65c07",
      storageBucket: "kwitter-65c07.appspot.com",
      messagingSenderId: "768831981653",
      appId: "1:768831981653:web:a2980aedf8ecfc88f6acdc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"add room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
           //End code
      });});}
getData();


function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
 window.location="kwitter_page.html" ;     
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

