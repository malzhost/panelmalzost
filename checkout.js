// Ambil data produk dari URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productPrice = urlParams.get('price');

document.getElementById("product-name").innerText = `Nama: ${productName}`;
document.getElementById("product-price").innerText = `Harga: Rp ${Number(productPrice).toLocaleString()}`;

// Nomor WhatsApp untuk konfirmasi
const whatsappNumber = "6282118263527"; // Ganti dengan nomor WA kamu
const message = `Halo, saya sudah transfer Rp${productPrice} untuk ${productName}. Berikut bukti pembayarannya: `;

// Buat link WhatsApp
document.getElementById("whatsapp-link").href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;