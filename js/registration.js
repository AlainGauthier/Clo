// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBByqzKQSZY0m040gttRPOjKzMdrNf8pDE",
    authDomain: "r2b-db.firebaseapp.com",
    databaseURL: "https://r2b-db.firebaseio.com",
    projectId: "r2b-db",
    storageBucket: "r2b-db.appspot.com",
    messagingSenderId: "508443500812",
    appId: "1:508443500812:web:b69df607163b922d0da929"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// user collection
var userRef = firebase.database().ref('users');


document.getElementById('registrationForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('inputName');
    var phone = getInputVal('inputPhone');
    var email = getInputVal('inputEmail');
    var subject = getInputVal('inputSubject');
    var message = getInputVal('textAreaMessage');

    saveUser(name, phone, email, subject,message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 6000);

    document.getElementById('registrationForm').reset();
}

//helper method
function getInputVal(id) {
    return document.getElementById(id).value;
}

//save user to firebase
function saveUser(name, phone, email, subject, message) {

    var newUserRef = userRef.push();
    newUserRef.set({
        name: name,
        phone: phone,
        email: email,
        subject: subject,
        message:message
    });

}