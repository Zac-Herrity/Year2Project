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