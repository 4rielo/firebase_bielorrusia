const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const refreshBtn = document.getElementById('refreshBtn');

const database = firebase.database();
const rootRef = database.ref('users');

//ADD
addBtn.addEventListener('click', (e) => { 
    e.preventDefault();
   
const createId = userId.value;
const autoId = rootRef.push().key
rootRef.child(autoId).set({
    first_name: firstName.value,
    last_name: lastName.value,
    age: age.value,
})  
});

//UPDATE
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newDate = {
        first_name: firstName.value,
        last_name: lastName.value,
        age: age.value
    };
    const updates = {};
    updates ['/users/' + userId.value] = newDate;
    updates ['/super-users/' + userId.value] = newDate;
    database.ref().update(updates);
});

//REMOVE
removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    rootRef.child(userId.value).remove()
    .then(() => {
        alert(firstName + "user delted from database")
    })
    .catch(error => {
        alert(error)
    })

});

//REFRESH
refreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userId.value = "";
    firstName.value = "";
    lastName.value = "";
    age.value = " ";
   
})

rootRef.on('value', snapshot => {
    console.log('An event ocurred atention!!!')
})