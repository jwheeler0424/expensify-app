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
    isSingle: false,
    location: {
        city: 'Fresno',
        country: 'United States'
    }
});

// database.ref().set('This is my data.')

database.ref('age').set(35);
database.ref('location/city').set('Clovis');

database.ref('attributes').set({
    height: 68,
    weight: 200
});