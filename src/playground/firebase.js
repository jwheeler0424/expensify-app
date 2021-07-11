import firebase from 'firebase';

// database.ref('notes/-MeMmRSeXNiAvRmRO5S5').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref().update({
//     name: 'Jonathan'
// });

// setTimeout(() => {
//     database.ref('age').set(33);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data.', e)
//     });

// database.ref().set({
//     name: 'Jonathan Wheeler',
//     age: 34,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Fresno',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log('This failed.', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed')
//     })
//     .catch((e) => {
//         console.log('Did not remove data', e)
//     });