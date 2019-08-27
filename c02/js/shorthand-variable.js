let price = 5;
let quantity = 14;

function setPrice() {
  price = document.getElementById('price').value;
  updateTotal();
}

function setQuantity() {
  quantity = document.getElementById('quantity').value;
  updateTotal();
}

function updateTotal() {
  let total = price * quantity;
  if (total === NaN) {
      alert('nan');
    document.getElementById('cost').textContent = 'invalid entries';
  } else {
    document.getElementById('cost').textContent = '$' + total;
  }
}

// let price, quantity, total;
// price = 5;
// quantity = 14;
// total = price * quantity;

// let price = 5, quantity = 14;
// let total = price * quantity;
