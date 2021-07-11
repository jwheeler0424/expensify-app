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

database.ref().set({
    name: 'Jonathan Wheeler',
    age: 34,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Fresno',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved!')
}).catch((e) => {
    console.log('This failed.', e)
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed')
//     })
//     .catch((e) => {
//         console.log('Did not remove data', e)
//     });