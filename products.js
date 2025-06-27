const products = [
  { name: "Jaket Matik", price: "99000", image: "https://via.placeholder.com/200" },
  { name: "Totebag Lucu", price: "55000", image: "https://via.placeholder.com/200" },
  { name: "Topi Keren", price: "75000", image: "https://via.placeholder.com/200" }
];

const list = document.getElementById("product-list");
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h2>${p.name}</h2>
    <p>Rp ${Number(p.price).toLocaleString()}</p>
    <button onclick='addToCart(${JSON.stringify(p)})'>Tambah ke Keranjang</button>`;
  list.appendChild(card);
});
