//const nama=prompt("masukan nama kamu:");
//alert("nama kamu adalah:  " + nama);
const cardproduct = document.querySelectorAll(".product-card");
const cart = document.querySelector("#cart-cont");

cardproduct.forEach(function (card) {
    const qtyValue = card.querySelector(".qty-value");
    const qtyMin = card.querySelector(".btn-min");
    const qtyPlus = card.querySelector(".btn-plus");
    const btnBuy = card.querySelector(".btn-beli");

qtyPlus.addEventListener("click", function () {
    let jumlah = parseInt(qtyValue.value);
    jumlah = jumlah + 1;
    qtyValue.value = jumlah;
});
qtyMin.addEventListener("click", function () {
    let jumlah = parseInt(qtyValue.value);
    jumlah = jumlah - 1;
    qtyValue.value = jumlah;
});
btnBuy.addEventListener("click", function (){
    let jumlahBeli= parseInt(qtyValue.value);
    let jumlahBarang=parseInt(cart.textContent);
    cart.textContent= jumlahBarang + jumlahBeli;
});
});
