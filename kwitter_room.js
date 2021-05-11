
var firebaseConfig = {
      apiKey: "AIzaSyA2xLmLIw1kMpSYH772Vww9Y0LK79uhokk",
      authDomain: "kwitterrrrrrr.firebaseapp.com",
      databaseURL: "https://kwitterrrrrrr-default-rtdb.firebaseio.com",
      projectId: "kwitterrrrrrr",
      storageBucket: "kwitterrrrrrr.appspot.com",
      messagingSenderId: "131663203204",
      appId: "1:131663203204:web:5687fe284335405b06abd1"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name +" !";

    function addRoom() {
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
        });
        localStorage.setItem("room_name", room_name);
        window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name"+ room_name);
       row="<div class='room name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML=row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location("kwitter_page.html");
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}