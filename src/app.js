document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
items: [
    { id: 1, name: 'souffle cake matcha', img: 'coklat.jpeg', price: 10000 },
    { id: 2, name: 'souffle cake chocolate', img: 'matcha.jpg', price: 10000 },
    { id: 3, name: 'souffle cake red velvet', img: 'redvelvet.jpg', price: 10000 },
    { id: 4, name: 'Strawberry Cake', img: '4.jpg', price: 30000 },
    { id: 5, name: 'Cheesecake', img: '5.jpg', price: 35000 },
],
}));


Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
        // cek pakaha ada barang yang sama
        const cartItem = this.items.find((item) => item.id === newItem.id);


        // jika belumada / cart masih kosong
        if(!cartItem) {

        this.items.push({...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
        }else {
            // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
             this.items = this.items.map((item) => {
                // jika barang berbeda
                if(item.id !== newItem.id) {
                    return item;

                }else {
                    // jika barang sudah ada, tambah quantity dan total nya
                    item.quantity++;
                    item.total = item.price * item.quantity;
                    this.quantity++;
                    this.total += item.price;
                    return item;
                }

             })
        }
    },

    remove(id) {
        // ambil item yang mau di remove
        const cartItem = this.items.find((item) => item.id == id);
        // jika item lebih dari 1
        if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
            // jika bukan barang yang diclik
            if(item.id !== id) {
                return item;
            }else {
                item.quantity--;
                item.total = item.price * item.quantity;
                this.quantity--;
                this.total -= item.price;
                return item;

            }
        })
    }else if (cartItem.quantity === 1) {
        // jika barang sisa satu
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;

    }
    
    },
});

});


// form validation 
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;


const form = document.querySelector('#checkoutForm');
form.addEventListener('keyup', function() {
    for(let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].value.length !== 0) {
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled');
        }else {
            return false;
        }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
});

// kirim ketika data chekout di klik
checkoutButton.addEventListener('click', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    const massage = formatMassage(objData);
   window.open('https://wa.me/628978303432?text=' + encodeURIComponent(massage));
});


// format pesan whatsapp
const formatMassage = (obj) => {
    return `Data Customer
    Nama: ${obj.nama}
    Email: ${obj.email}
    No HP: ${obj.phone}
    Alamat: ${obj.address}
    Pesan: ${obj.pesan}
Data Pesanan
    ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`) }
    
Total: ${rupiah(obj.total)}
Terima kasih.`;
}

// konversi harga ke format IDR
const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(number);
};


// kontact from whatsapp
const contactForm = document.querySelector('#contactForm');

// Tambahkan pengecekan ini agar tidak error saat form tidak ditemukan
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil data dari input
    const name = document.querySelector('#contact-name').value;
    const email = document.querySelector('#contact-email').value;
    const phone = document.querySelector('#contact-phone').value;

    // Susun pesan WhatsApp
    const whatsappNumber = '628978303432';
    const message = `Halo Admin.%0A%0A*Data Kontak*%0A- Nama: ${name}%0A- Email: ${email}%0A- No HP: ${phone}`;

    // Buka jendela WhatsApp baru
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  });
}


