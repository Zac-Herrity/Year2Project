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
})
//#endregion
