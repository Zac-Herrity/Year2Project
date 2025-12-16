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

const checkoutDiv = document.getElementById('checkoutDiv');
let total = 0;

for(const productId in cart){
    const quantity = cart[productId];
    const price = prices[productId];
    const tokenTotal = price * quantity;

    total += tokenTotal;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'mb-3'; //sets margin for cleaner output

    itemDiv.innerHTML =
    `${productId} <br>
    Quantity: ${quantity} <br>
    Price: ${price} (per token)<br>
    Total: ${tokenTotal}`;

    checkoutDiv.appendChild(itemDiv);
}

const totals = document.createElement('div');
totals.innerHTML = `<h5>Total of your selection: ${total}`;
checkoutDiv.appendChild(totals);