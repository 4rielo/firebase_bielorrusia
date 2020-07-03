const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const autoId = rootRef.push().key
    rootRef.child(autoId).set({
        first_name: firstName.value,
        last_name: lastName.value,
        age: age.value,
    });
});

updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //let age1;
    //let first_name1;
    //let last_name1;
    const updates ={};
    if (age.value){updates['/users/' + userId.value + '/age'] = age.value;}
    if (firstName.value){updates['/users/' + userId.value + '/first_name'] = firstName.value;}    
    if (lastName.value){updates['/users/' + userId.value + '/last_name'] = lastName.value;}
    //updates[remove('/users/' + userId.value + '/firstName')]
    /*
    const newData = {
        age: age1,
        first_name: first_name1,
        last_name: last_name1
    };
    //in this part him add a new kind of user as 'super-users'... why, i do not know
    //const updates ={};
    updates['/users/' + userId.value] = newData;*/
    //updates['/super-users/'+ userId.value] = newData;
    database.ref().update(updates);
});

removeBtn.addEventListener('click', e => {
    e.preventDefault();
    rootRef.child(userId.value).remove().then(() => {
        window.alert('User removed from database!');
    })
    .catch (error => {
        console.error(error);
    })
});

//rootRef.child(0).on('child_changed', snapshot => { 
//    console.log(snapshot.val());
//});

//rootRef.orderByKey().limitToFirst(2).on('value', snapshot => {
//    console.log(snapshot.val());
//});

rootRef.orderByChild('last_name').equalTo('Ramiro').on('value',snapshot => {
    console.log(snapshot.val());
});

readBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    rootRef.child(userId.value).on('value', snapshot => {
        //console.log(snapshot.val().age);
        age.value = snapshot.val().age;
        firstName.value = snapshot.val().first_name;
        lastName.value = snapshot.val().last_name;
    });
});