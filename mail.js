const firebaseConfig = {
    apiKey: "AIzaSyC5vGlHFprkJtsTp9_GK15EiaB54-R6z5U",
    authDomain: "messageform-518a0.firebaseapp.com",
    databaseURL: "https://messageform-518a0-default-rtdb.firebaseio.com",
    projectId: "messageform-518a0",
    storageBucket: "messageform-518a0.appspot.com",
    messagingSenderId: "747119016489",
    appId: "1:747119016489:web:8234deda046e6c002dfa38"
  };

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("MessageForm");

document.getElementById("MessageForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);
  alert("Data successfully pushed into Realtime database!!");
  document.getElementById("MessageForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    
   db.collection("messages").add({
    name: name,
    emailid: emailid,
    msgContent: msgContent
  })
  .then((docRef) => {
       alert("Data successfully pushed to Firestore Database");
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
    
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
