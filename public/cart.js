let cart;
const savedCart = localStorage.getItem('cart');
if (savedCart){
    cart = JSON.parse(savedCart); //if true, parses the data to cart
}
else{
    cart = {}; //returns empty array to avoid issues (only if false)
}
console.log('Loaded cart:', cart); //testing

document.querySelectorAll('.shopCard').forEach(card =>{
    const productID = card.dataset.productId;
    const addButton = card.querySelector('.add-btn');
    const removeButton = card.querySelector('.remove-btn');
    const count = card.querySelector('.cart-count');

    count.textContent = cart[productID] || 0; //sets cart to 0, or sets to amount added to cart

    addButton.addEventListener('click', function(){
        console.log('adding product - ', productID);
        console.log('before - ', cart);
        if (cart[productID]){
            cart[productID] = cart[productID]+1; //adds +1 to total when clicked
        }
        else{
            cart[productID] = 1; //if proudct is not in cart already. set it's value to 1
        }
        console.log('after -', cart)
        count.textContent = cart[productID];
        saveCart();
    });


    removeButton.addEventListener('click', function(){
        if (cart[productID] > 0){
            cart[productID] = cart[productID] - 1; //removes 1 from counter
        count.textContent = cart[productID];
        saveCart();
        }
        else{
            delete cart[productID]; //deletes counter, prevents it going into negative
        }
    });
})

function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
    //stringify transforms a js object (a proudct for example) to a string
}

//following is to clear local storage as it does not clear on refresh
const clearButton = document.getElementById('clearSelection');

clearButton.addEventListener('click', function() {
    localStorage.removeItem('cart');
    console.log("Cart Cleared");

    //updates all span counters
    document.querySelectorAll('.cart-count').forEach(span => {
        span.textContent = 0; //sets span countes to 0's
    });
});