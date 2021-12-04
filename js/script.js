/* ------------------
    Init Variables
------------------- */
// Memory
const memory8GB = document.getElementById('memory8GB');
const memory16GB = document.getElementById('memory16GB');

// Storage
const storage256GB = document.getElementById('storage256GB');
const storage512GB = document.getElementById('storage512GB');
const storage1TB = document.getElementById('storage1TB');

// Delivery Cost
const deliveryFree = document.getElementById('deliveryFree');
const delivery20 = document.getElementById('delivery20');

// Prices
let bestPrice = document.getElementById('bestPrice');
let memoryCost = document.getElementById('memoryCost');
let storageCost = document.getElementById('storageCost');
let deliveryCost = document.getElementById('deliveryCost');
let totalPrice = document.getElementById('totalPrice');

// Promo
const promoApply = document.getElementById('promoApply');
let discountAmount = document.getElementById('discountAmount');
let promoCode = document.getElementById('promoCode');
let promoTotal = document.getElementById('promoTotal');
let isPromo = false;

/*--------------------
    Main Functions
---------------------*/

// Manage Promo Discount
function promo() {
    if (isPromo == true) {
        const promoDiscount = parseFloat(totalPrice.innerText) * .20;
        promoTotal.innerText = parseFloat(totalPrice.innerText) - promoDiscount;
        discountAmount.innerText = 20;
    }
    else {
        promoTotal.innerText = parseFloat(totalPrice.innerText);
    }
}

// Update total prices in HTML
function updateTotalPrice() {
    const total = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    totalPrice.innerText = total;
    promo();
}

/*------------------------
    OnClick Functions
-------------------------*/
memory8GB.addEventListener('click', function () {
    memoryCost.innerText = 0;
    updateTotalPrice();
})
memory16GB.addEventListener('click', function () {
    memoryCost.innerText = 180;
    updateTotalPrice();
})
storage256GB.addEventListener('click', function () {
    storageCost.innerText = 0;
    updateTotalPrice();
})
storage512GB.addEventListener('click', function () {
    storageCost.innerText = 100;
    updateTotalPrice();
})
storage1TB.addEventListener('click', function () {
    storageCost.innerText = 180;
    updateTotalPrice();
})
deliveryFree.addEventListener('click', function () {
    deliveryCost.innerText = 0;
    updateTotalPrice();
})
delivery20.addEventListener('click', function () {
    deliveryCost.innerText = 20;
    updateTotalPrice();
})
promoApply.addEventListener('click', function () {
    if (promoCode.value.toLowerCase() == 'stevekaku') {
        isPromo = true;
        promo();
    }
})
