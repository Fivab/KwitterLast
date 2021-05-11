
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

    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }

getData();

function Send() {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
