// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCpsTUzMrfQ1Gss4h1mEwqREWqXrkoDjZY",
      authDomain: "kwitter-8ee5b.firebaseapp.com",
      databaseURL: "https://kwitter-8ee5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-8ee5b",
      storageBucket: "kwitter-8ee5b.appspot.com",
      messagingSenderId: "387495447939",
      appId: "1:387495447939:web:7cd2f07dd727e6d80cfab6"
    };

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name = "+ Room_names);
row = "<div class = 'room_name' id = '+ Room_names +' onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML+= row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}