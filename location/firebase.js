import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import {getDatabase, ref, set, onValue, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyBs82S-a8B_n2nvE58-eSJaBEZS_hOqpQw",
authDomain: "formproject-97909.firebaseapp.com",
projectId: "formproject-97909",
storageBucket: "formproject-97909.appspot.com",
messagingSenderId: "1022928071280",
appId: "1:1022928071280:web:424997b8216d1a093562b5",
measurementId: "G-B1KN9Z1612"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Initialize Firebase



submitData.addEventListener('click', (e) => {

var customer_name = document.getElementById('custname').value;
 var customer_date = document.getElementById('custdate').value;
  var phone_number = document.getElementById('custnumber').value;
// // var credit_amount = document.getElementById('custamt').value;
  var customer_address = document.getElementById('custadd').value;
// var gps_location=document.getElementById('custgpsadd').value;


// const newKey = push(child(ref(database), 'users')).key;

//add data
set(ref(database, 'creditformnew2/'+customer_name ), {
customer_name: customer_name,
 customer_date:customer_date,
 phone_number:phone_number,
 customer_address:customer_address
// phone_number: phone_number,
// credit_amount:credit_amount,
// customer_address: customer_address
// gps_location:gps_location
}).then(() => {
var x = document.getElementById('text');
 x.innerHTML="Thank you for submitting";

console.log("sucess");
})
.catch((error) => {
// The write failed...
// var x = document.getElementById('text');
 console.log("error");
});

});

// readData.addEventListener('click', (e) => {
// // read data
// const starCountRef = ref(database, 'users/' + username);
// onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     alert(data.email);
// });
// });

// updateData.addEventListener('click', (e) => {
// //update data
// update(ref(database, 'users/' + username), {
//     email: email,
//     age: age
// }).then(() => {
//     // Data saved successfully!
//     alert('data updated');
// })
//     .catch((error) => {
//         // The write failed...
//         alert(error);
//     });
// });

// removeData.addEventListener('click', (e) => {
// //remove data
// removeData.addEventListener('click',(e) => {
//     var username = document.getElementById('username').value;

//     remove(ref(database, 'users/' + username));
//     alert('removed');
// });
// });