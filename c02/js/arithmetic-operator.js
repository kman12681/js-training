let subtotal = (13 + 1) * 5;
let shipping = 0.5 * (13 + 1);

let total = subtotal + shipping;

document.getElementById('subtotal').textContent = '$' + subtotal;
document.getElementById('shipping').textContent = '$' + shipping;
document.getElementById('total').textContent = '$' + total;