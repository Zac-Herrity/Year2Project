document.getElementById('payment').addEventListener('submit', function(){

    //variables
    const name = document.getElementById('cardName').value.trim();
    const number = document.getElementById('cardNumber').value.trim();
    const exp = document.getElementById('expDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    //regex
    const regexName = /^[A-Za-z]+([ .][A-Za-z]+)*$/;
    const regexNumber = /^\d{16}$/;
    const regexExp = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const regexCVV = /^\d{3}$/;
})