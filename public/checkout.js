//pretty much the same as cart.js 
let cart;
const savedCart = localStorage.getItem('cart');
if (savedCart) {
    cart = JSON.parse(savedCart);
}
else {
    cart = {};
}

const prices = {
    whimsycash: 100.00,
    gitpushpay: 37.85,
    divcoin: 12.20,
    binarybling: 18.50,
    oopbucks: 27.50,
    sqlcoin: 87.50
}