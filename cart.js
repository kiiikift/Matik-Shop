let cart = [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const items = document.getElementById("cart-items");
  const total = document.getElementById("total");
  items.innerHTML = "";
  let sum = 0;

  cart.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - Rp ${Number(p.price).toLocaleString()}`;
    items.appendChild(li);
    sum += Number(p.price);
  });

  total.textContent = `Rp ${sum.toLocaleString()}`;
  const message = cart.map(p => `• ${p.name} - Rp ${Number(p.price).toLocaleString()}`).join("%0A");
  document.getElementById("checkout").href = `https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan:%0A${message}`;
}

window.onload = () => {
  const saved = localStorage.getItem("cart");
  if (saved) {
    cart = JSON.parse(saved);
    renderCart();
  }
};
