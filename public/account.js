//test dummy login
if(!localStorage.getItem('users')){
    const users = [
        {
            email: "MrMoneybags@Money.com",
            name: "Walter",
            password: "LoveMoney123"
        }
    ];
    localStorage.setItem('users', JSON.stringify(users));
}


const form = document.getElementById('loginForm');
form.addEventListener('submit', function(x){
    x.preventDefault();

    const formAction = document.activeElement.dataset.action;
    if(formAction === 'login'){
        login();
    }
    else if(formAction === 'create'){
        createAccount();
    }
});
// #region Login
function login(){
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const username = document.getElementById('username').value.trim();
    const users = JSON.parse(localStorage.getItem('users')) || []; //parses local storage OR returns empty array

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) { //loops through users to check if details match those in json
    foundUser = users[i];
    console.log('searching for match');
    break;
  }
}
if(!foundUser){
    alert('Invalid Login');
    console.log('login did not match');
    return;
}

localStorage.setItem('username', foundUser.name);
window.location.href = '/loggedin';
}
//#endregion

//#region Create Account
function createAccount(){
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const username = document.getElementById('username').value.trim();

    if(!email || !password || !username){
        alert('Please ensure to fill iun all fields')
        return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || []; //same as before

    for(let i =0; i<users.length; i++){
        if(users[i].email === email){
            alert('This account has already been created.')
            return;
        }
    }
    users.push({
        email, name: username, password //creates new object with these params
    });

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('username', username);

    window.location.href = '/loggedin';
}
//#endregion