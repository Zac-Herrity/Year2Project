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

// #region Login
document.getElementById('loginForm').addEventListener('submit', function(x){
    x.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
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

localStorage.setItem(userLoggedIn, foundUser.name);

});
//#endregion
