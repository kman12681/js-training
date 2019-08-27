let inStock;
let shipping;

inStock = true;
shipping = false;

document.getElementById('stock').className = inStock;
document.getElementById('shipping').className = shipping;

function toggle() {
  inStock = !inStock;
  shipping = !shipping;
  updateIcon();
}

function updateIcon() {
  document.getElementById('stock').className = inStock;
  document.getElementById('shipping').className = shipping;
}
