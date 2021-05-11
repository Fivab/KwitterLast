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


  function addUser() {
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}