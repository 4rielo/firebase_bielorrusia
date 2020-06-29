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
    const newData = {
        age: age.value,
        first_name: firstName.value,
        last_name: lastName.value
    };
    const updates = {};
    updates['/users/' + userId.value] = newData;
    //updates['/super-users/' + userId.value] = newData;
    database.ref().update(updates);

});

removeBtn.addEventListener('click', e => {

});