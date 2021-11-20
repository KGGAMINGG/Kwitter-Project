//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name : user_name, 
messege : msg, 
like : 0 
});
 document.getElementById("msg").value = " ";


}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log( firebase_messege_id );     
console.log( messege_data ); 
name = messege_data['name'];
messege = messege_data['messege'];
like = messege_data['like'];

name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png' ></h4>";
messege_with_tag = "<h4 class = 'messege_h4'>" + messege + "</h4>";
like_button_tag = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> like : " + like + "</span> </button> <hr>";
row = name_with_tag + messege_with_tag +like_button_tag + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
console. log ("clicked on like button - "
+ message_id);
button_id = message_id;
likes = document. getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console. log (updated_likes);
firebase.database(). ref (room_name) .child(message_id).update({
like : updated_likes
});

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
