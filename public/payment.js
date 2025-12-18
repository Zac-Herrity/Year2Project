document.getElementById('payment').addEventListener('submit', function(){

    //variables
    const name = document.getElementById('cardName').value.trim();
    const number = document.getElementById('cardNumber').value.trim();
    const exp = document.getElementById('expDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    //regex
    const regexName = /^[a-zA-z]{3,12} [a-zA-z]{2,12}$/;
    const regexNumber = /^\d{16}$/;
    const regexExp = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const regexCVV = /^\d{3}$/;

    if(!regexName.test(name)){
        alert('Please enter a valid name');
        return;
    }
    if(!regexNumber.test(number)) {
        alert('Card number must be 16 digits long');
        return;
    }
    if(!regexExp.test(exp)){
        alert('Expiary date must match MM/YY');
        return;
    }
    if(!regexCVV.test(cvv)){
        alert('Must be 3 digits');
        return;
    }

    localStorage.setItem('cardName', name);
})