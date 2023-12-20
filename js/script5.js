let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartitem.classList.remove('active');
}
let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}   

let cartitem =document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartitem.classList.remove('active');
}
//cart working 
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}
//funtion
// function ready(){
//     var removecartbuttons = document.getElementsByClassName("cart-remove")
//     console.log(removecartbuttons)
//     for (var i = 0; i < removecartbuttons.length; i++){
//         var botton = removecartbuttons[i]
//         botton.addEventListener('click', removecartItem)
//  }
//  //quantity
//  var quantityInputs = document.getElementsByClassName("cart-que");
//     for (var i = 0; i < quantityInputs.length; i++){
//         var input = quantityInputs[i];
//         input.addEventListener("change", quantityChanged);
//     }
//     //add cart
//     var addCart = document.getElementsByClassName("btn");
//     for (var i = 0; i < addCart.length; i++){
//         var button = addCart[i];
//         button.addEventListener("click", addCartClicked)
//     } 
// }
// //remove cartitem
// function removecartItem(event){
//     var buttonClicked = event.target
//     buttonClicked.parentElement.remove()
//     updatetotal();
// }
// //quantity change
// function quantityChanged(event){
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0){
//         input.value = 1;
//     }
//     updatetotal();
// }
//add to cart
// function addCartClicked(event){
//     var button = event.target
//     var shopProducts = button.parentElement
//     var tittle = shopProducts.getElementsByClassName("product-t")[0].innerText
//     var price  = shopProducts.getElementsByClassName("price")[0].innerText
//     var image  = shopProducts.getElementsByClassName("product-img")[0].src
//     console.log(tittle, price, image)
//     addProductToCart(tittle, price, image)
// }
// function addProductToCart(tittle, price, image){
//     var cartBox = document.createElement('div')
//     cartBox.classList.add('cart-box')
//     var cartcontent = document.getElementsByClassName("cart-con")[0]
//     var cartRowContent = `<img src="${image}" width="px" height="50px "  alt="" class="cart-img">
//                         <div class="detail-box">
//                         <div class="cart-pro-t">${tittle}</div>
//                         <div class="cart-price">${price}</div>
//                         <input type="number" value="1" class="cart-que">
//                         </div>
//                         <!---Remove-cart---->
//                         <i class="fa fa-trash cart-remove"></i>`
//     cartBox.innerHTML = cartRowContent 
//     cartitem.append(cartBox)
    
// }
// //Total update
// function updatetotal(){
//     var cartContent = document.getElementsByClassName("cart-con")[0];
//     var cartboxes = cartContent.getElementsByClassName("cart-box");
//     var total = 0;  
//     for (var i = 0; i < cartboxes.length; i++){
//         var cartBox = cartboxes[i];
//         var priceElement = cartBox.getElementsByClassName("price")[0];
//         var quantityElement = cartBox.getElementsByClassName("cart-que")[0];
//         var price = parseFloat(priceElement.innerText.replace('$', ''));
//         var quantity = quantityElement.value;
//         total = total + (price * quantity);
//         total = Math.round(total * 100) / 100;
//     document.getElementsByClassName("total-price")[0].innerText = "$" + total;
//  }
// }
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item-s cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

