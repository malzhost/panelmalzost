//ubah nama produk dan harga produk disini
const products = [
    { id: 1, name: "Panel 1 GB", price: 1000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 2, name: "Panel 2 GB", price: 2000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 3, name: "Panel 3 GB", price: 3000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 4, name: "Panel 4 GB", price: 4000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 5, name: "Panel 5 GB", price: 5000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 6, name: "Panel 6 GB", price: 6000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 7, name: "Panel 7 GB", price: 7000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 8, name: "Panel 8 GB", price: 8000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 9, name: "Panel 9 GB", price: 9000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 10, name: "Panel 10 GB", price: 10000, image: "https://h.top4top.io/p_3359z8r830.png" },
    { id: 11, name: "Panel unli GB", price: 15000, image: "https://h.top4top.io/p_3359z8r830.png" }
];
// Yang di bawah ini ngga usah di ubah kalo ngga ingin eror
const productList = document.getElementById("product-list");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}" 
        style="width: 100%; max-width: 50px; height: auto; border-radius: 10px; object-fit: cover;">
    <h3>${product.name}</h3>
    <p>Rp ${product.price.toLocaleString()}</p>
    <button onclick="buyNow(${product.id})">Beli Sekarang</button>
`;
    productList.appendChild(productDiv);
});

function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        window.location.href = `checkout.html?name=${product.name}&price=${product.price}`;
    }
}