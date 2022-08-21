const firebaseConfig = {
    apiKey: "AIzaSyDl0b7_AkuCRjQZG1k_-7LB4jg3VJKvFJU",
    authDomain: "form-ddcb5.firebaseapp.com",
    databaseURL: "https://form-ddcb5-default-rtdb.firebaseio.com",
    projectId: "form-ddcb5",
    storageBucket: "form-ddcb5.appspot.com",
    messagingSenderId: "813886954824",
    appId: "1:813886954824:web:cae459d2e05d6f4352277d",
    measurementId: "G-QQ5P0M8PHY"
};

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('email');

    saveMessage(name, emailid);
}

const saveMessage = (name, emailid) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}