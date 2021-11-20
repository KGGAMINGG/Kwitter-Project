
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDWB2FOIgJ-Jasffdhxb_C8P1tpopC3UMw",
      authDomain: "kwitter-5fd5e.firebaseapp.com",
      databaseURL: "https://kwitter-5fd5e-default-rtdb.firebaseio.com",
      projectId: "kwitter-5fd5e",
      storageBucket: "kwitter-5fd5e.appspot.com",
      messagingSenderId: "979239194614",
      appId: "1:979239194614:web:ab8de81eaf05622eb941d7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

            purpose: "adding room name "
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("room_name =" + Room_names);

                  row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;


                  //End code
            });
      });
}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      Window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}