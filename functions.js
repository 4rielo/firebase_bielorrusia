const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const readBtn = document.getElementById('readBtn');

const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', (e) => {
    //alert('Botón');
    e.preventDefault();
    const autoId = userId.value;//rootRef.push().key;
    rootRef.child(autoId).set({
        first_name: firstName.value,
        last_name: lastName.value,
        age: age.value,
    });
});


updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = database.ref('users/'+userId.value);

    if(age.value) {
        newData.child('age').set(age.value);
    };

    if(firstName.value) {
        newData.child('first_name').set(firstName.value);
    };

    if(lastName.value){
        newData.child('last_name').set(lastName.value);
    };
    //rootRef.child(userId.value).update(newData);

});

removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(userId.value) {
        rootRef.child(userId.value).remove()
        .then( ()=>{
            window.alert('User removed from database!');
        })
        .catch(error => {
            console.error(error);
        });
    }
});

readBtn.addEventListener('click', (e) => {
    e.preventDefault();

    rootRef.child(userId.value).on('value', snapshot => {
        console.log(snapshot.val());
    });
})
