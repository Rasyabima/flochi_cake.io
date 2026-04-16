// toggle class active untuk navbar-nav dan humberger menu
// mengambil class navbar-nav
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault(); // ketika hamburger menu di klik, maka tidak akan melakukan aksi default yaitu scroll ke atas karena href="#" yang menyebabkan scroll ke atas, dengan menambahkan e.preventDefault() maka aksi default tersebut tidak akan terjadi
};

// toggle class active untuk search form dan search box
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// ketika search form di klik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();// ketika menekan tombol search maka akan salsung fokus ke input tanpa perluh mengekliknya lagi
  e.preventDefault(); // ketika tombol search di klik, maka tidak akan melakukan aksi default yaitu scroll ke atas karena href="#" yang menyebabkan scroll ke atas, dengan menambahkan e.preventDefault() maka aksi default tersebut tidak akan terjadi
};

// toggle class active untuk shopping cart 
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault(); // ketika tombol cart di klik, maka tidak akan melakukan aksi default yaitu scroll ke atas karena href="#" yang menyebabkan scroll ke atas, dengan menambahkan e.preventDefault() maka aksi default tersebut tidak akan terjadi
}


// klik di luar sidebar/elemen untuk menghilangkan navbar

const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

// selama yang di klik bukan hamburger menu dan navbar, maka navbar akan hilang
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

   if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  } 

   if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  } 
 
 

});


// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailModal4= document.querySelector("#item-detail-modal4");
const itemDetailModal5 = document.querySelector("#item-detail-modal5");

const itemDetailButtons = document.querySelector(".item-detail-button");
const itemDetailButtons2 = document.querySelector(".item-detail-button2");
const itemDetailButtons3 = document.querySelector(".item-detail-button3");
const itemDetailButtons4 = document.querySelector(".item-detail-button4");
const itemDetailButtons5 = document.querySelector(".item-detail-button5");

itemDetailButtons.onclick = (e) => {
  itemDetailModal.style.display = 'flex';
  e.preventDefault();

};
itemDetailButtons2.onclick = (e) => {
  itemDetailModal2.style.display = 'flex';
  e.preventDefault();

};
itemDetailButtons3.onclick = (e) => {
  itemDetailModal3.style.display = 'flex';
  e.preventDefault();

};
itemDetailButtons4.onclick = (e) => {
  itemDetailModal4.style.display = 'flex';
  e.preventDefault();

};
itemDetailButtons5.onclick = (e) => {
  itemDetailModal5.style.display = 'flex';
  e.preventDefault();
};

// click tombol close 
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
}

document.querySelector(".modal2 .close-icon").onclick = (e) => {
  itemDetailModal2.style.display = 'none';
  e.preventDefault();
}

document.querySelector(".modal3 .close-icon").onclick = (e) => {
  itemDetailModal3.style.display = 'none';
  e.preventDefault();
}
document.querySelector(".modal4 .close-icon").onclick = (e) => {
  itemDetailModal4.style.display = 'none';
  e.preventDefault();
}
document.querySelector(".modal5 .close-icon").onclick = (e) => {
  itemDetailModal5.style.display = 'none';
  e.preventDefault();
}

// klik di luar modalm
const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

const modal2 = document.querySelector('#item-detail-modal2');
window.onclick = (e) => {
  if (e.target === modal2) {
    modal2.style.display = 'none';
  }
}

const modal3 = document.querySelector('#item-detail-modal3');
window.onclick = (e) => {
  if (e.target === modal3) {
    modal3.style.display = 'none';
  }
}
const modal4 = document.querySelector('#item-detail-modal4');
window.onclick = (e) => {
  if (e.target === modal4) {
    modal4.style.display = 'none';
  }
}
  const modal5 = document.querySelector('#item-detail-modal5');
  window.onclick = (e) => {
    if (e.target === modal5) {
      modal5.style.display = 'none';
    }
  }



