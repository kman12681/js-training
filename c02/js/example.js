let greeting = 'Howdy ';

let name = 'Keith';

let message = ', please check your order:';

let welcome = greeting + name + message;

let sign = 'Montague House';
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

function setSign() {
  sign = document.getElementById('sign').value;
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = sign.length * 0.5;
  grandTotal = subTotal + shipping;
  update();
}

function update() {
  document.getElementById('userSign').textContent = sign;
  document.getElementById('tiles').textContent = tiles;
  document.getElementById('subTotal').textContent = subTotal;
  document.getElementById('shipping').textContent = shipping;
  document.getElementById('total').textContent = grandTotal;
}

document.getElementById('greeting').textContent = welcome;
document.getElementById('userSign').textContent = sign;
document.getElementById('tiles').textContent = tiles;
document.getElementById('subTotal').textContent = subTotal;
document.getElementById('shipping').textContent = shipping;
document.getElementById('total').textContent = grandTotal;
