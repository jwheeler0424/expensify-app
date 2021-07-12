import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYsT8-AO2qYT8c4E6wlPfupo155KMsevU",
    authDomain: "expensify-4d7e6.firebaseapp.com",
    databaseURL: "https://expensify-4d7e6-default-rtdb.firebaseio.com",
    projectId: "expensify-4d7e6",
    storageBucket: "expensify-4d7e6.appspot.com",
    messagingSenderId: "457348987732",
    appId: "1:457348987732:web:39cd1f931b121dc65fe6c1",
    measurementId: "G-C91N9FY26C"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// const expenses = [{
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// }, {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 123456789
// }, {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: 12345678912345
// }]

// database.ref('expenses').push({
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: 12345678912345
// });