document.addEventListener('DOMContentLoaded', () => {
    const modalCheckout = document.getElementById('modal-checkout');
    const closeButton = document.querySelector('.close-button');
    const btnBeliElements = document.querySelectorAll('.btn-beli');
    const modalAkunNama = document.getElementById('modal-akun-nama');
    const modalAkunHarga = document.getElementById('modal-akun-harga');
    const checkoutForm = document.getElementById('checkout-form');
    const paymentInstructions = document.getElementById('payment-instructions');
    const paymentDetails = document.getElementById('payment-details');

    let selectedAkun = {}; // Untuk menyimpan data akun yang dipilih

    // Fungsi untuk membuka modal
    btnBeliElements.forEach(button => {
        button.addEventListener('click', (event) => {
            const akunId = event.target.dataset.akunId;
            // Di sini Anda akan mengambil data akun dari server berdasarkan akunId
            // Untuk contoh, kita akan menggunakan data dummy
            const akunData = {
                'netflix-premium-1': {
                    nama: 'Akun Netflix Premium',
                    harga: 'Rp 50.000',
                    deskripsi: 'Masa Aktif: 1 Bulan'
                },
                'spotify-premium-3': {
                    nama: 'Akun Spotify Premium',
                    harga: 'Rp 75.000',
                    deskripsi: 'Masa Aktif: 3 Bulan'
                }
                // Tambahkan data akun lainnya di sini
            };

            selectedAkun = akunData[akunId];
            if (selectedAkun) {
                modalAkunNama.textContent = selectedAkun.nama + ' - ' + selectedAkun.deskripsi;
                modalAkunHarga.textContent = 'Harga: ' + selectedAkun.harga;
                modalCheckout.style.display = 'flex'; // Menggunakan flexbox untuk centering
                paymentInstructions.style.display = 'none'; // Sembunyikan instruksi pembayaran
                checkoutForm.style.display = 'block'; // Tampilkan form checkout
            } else {
                alert('Akun tidak ditemukan!');
            }
        });
    });

    // Fungsi untuk menutup modal
    closeButton.addEventListener('click', () => {
        modalCheckout.style.display = 'none';
    });

    // Tutup modal jika klik di luar area modal
    window.addEventListener('click', (event) => {
        if (event.target == modalCheckout) {
            modalCheckout.style.display = 'none';
        }
    });

    // Handle form checkout
    checkoutForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Mencegah refresh halaman
        
        const email = document.getElementById('email').value;
        const paymentMethod = document.getElementById('payment-method').value;

        if (!email || !paymentMethod) {
            alert('Mohon lengkapi semua data.');
            return;
        }

        // === SIMULASI INTEGRASI AUTO ORDER DENGAN BACKEND ===
        // Di dunia nyata, ini akan menjadi panggilan API ke server Anda.
        // Server akan:
        // 1. Menerima data pesanan (akunId, email, paymentMethod).
        // 2. Membuat order di database.
        // 3. Mengintegrasikan dengan payment gateway (contoh: Midtrans, Xendit, Duitku)
        //    untuk mendapatkan instruksi pembayaran atau QR Code.
        // 4. Mengurangi kuota akun yang tersedia.
        // 5. Setelah pembayaran terverifikasi oleh payment gateway (melalui webhook ke server Anda),
        //    server akan mengambil akun dari inventaris dan mengirimkannya ke email pelanggan
        //    atau menampilkan di halaman status pesanan.

        console.log('Memproses pesanan...');
        console.log('Akun:', selectedAkun.nama);
        console.log('Email:', email);
        console.log('Metode Pembayaran:', paymentMethod);

        // Simulasi respon dari backend setelah order dibuat dan instruksi pembayaran didapatkan
        const simulatedPaymentResponse = {
            success: true,
            message: 'Pesanan berhasil dibuat! Silakan lakukan pembayaran.',
            paymentDetails: ''
        };

        if (paymentMethod === 'dana') {
            simulatedPaymentResponse.paymentDetails = 'Transfer ke VA DANA: 8888081234567890 an. AkunPro';
        } else if (paymentMethod === 'ovo') {
            simulatedPaymentResponse.paymentDetails = 'Transfer ke VA OVO: 9999081234567890 an. AkunPro';
        } else if (paymentMethod === 'gopay') {
            simulatedPaymentResponse.paymentDetails = 'Scan QR Code ini untuk GoPay (QR akan muncul di sini atau link ke halaman QR)';
            // Di sini Anda mungkin menampilkan QR code atau link ke QR
        } else {
            simulatedPaymentResponse.paymentDetails = 'Instruksi pembayaran akan dikirimkan ke email Anda.';
        }

        // Tampilkan instruksi pembayaran
        if (simulatedPaymentResponse.success) {
            checkoutForm.style.display = 'none';
            paymentInstructions.style.display = 'block';
            paymentDetails.textContent = simulatedPaymentResponse.paymentDetails;
            alert(simulatedPaymentResponse.message);
        } else {
            alert('Terjadi kesalahan saat membuat pesanan. Silakan coba lagi.');
        }

        // Setelah pembayaran, server Anda akan memproses pengiriman akun
        // Ini adalah bagian yang paling kompleks dan membutuhkan backend.
    });
});