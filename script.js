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
  searchBox.focus(); // ketika menekan tombol search maka akan salsung fokus ke input tanpa perluh mengekliknya lagi
  e.preventDefault(); // ketika tombol search di klik, maka tidak akan melakukan aksi default yaitu scroll ke atas karena href="#" yang menyebabkan scroll ke atas, dengan menambahkan e.preventDefault() maka aksi default tersebut tidak akan terjadi
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault(); // ketika tombol cart di klik, maka tidak akan melakukan aksi default yaitu scroll ke atas karena href="#" yang menyebabkan scroll ke atas, dengan menambahkan e.preventDefault() maka aksi default tersebut tidak akan terjadi
};

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

// OPEN MODAL
document.querySelectorAll("[class^='item-detail-button']").forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const modal = document.querySelector(`#item-detail-modal${index === 0 ? "" : index + 1}`);
    if (modal) modal.style.display = "flex";
  });
});

// CLOSE ICON
document.querySelectorAll(".close-icon").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const modal = btn.closest(
      "#item-detail-modal, #item-detail-modal2, #item-detail-modal3, #item-detail-modal4, #item-detail-modal5"
    );
    if (modal) modal.style.display = "none";
  });
});



// CLICK LUAR MODAL
window.addEventListener("click", function (e) {
  document.querySelectorAll(
    "#item-detail-modal, #item-detail-modal2, #item-detail-modal3, #item-detail-modal4, #item-detail-modal5"
  ).forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


// open teka teki modal
document.querySelector("#teka-teki-button").addEventListener("click", function (e) {
  e.preventDefault();
  const tekaTekiModal = document.querySelector("#teka-teki-modal");
  if (tekaTekiModal) tekaTekiModal.style.display = "flex";
});

// close teka teki modal
document.querySelector("#close-teka-teki").addEventListener("click", function (e) {
  e.preventDefault();
  const tekaTekiModal = document.querySelector("#teka-teki-modal");
  if (tekaTekiModal) tekaTekiModal.style.display = "none";
});

// click luar teka teki modal
window.addEventListener("click", function (e) {
  const tekaTekiModal = document.querySelector("#teka-teki-modal");
  if (e.target === tekaTekiModal) {
    tekaTekiModal.style.display = "none";
  }
});


// teka teki 2
// open teka teki modal
document.querySelector("#teka-teki2-button").addEventListener("click", function (e) {
  e.preventDefault();
  const tekaTekiModal2 = document.querySelector("#teka-teki-modal2");
  if (tekaTekiModal2) tekaTekiModal2.style.display = "flex";
});

// close teka teki modal
document.querySelector("#close-teka-teki2").addEventListener("click", function (e) {
  e.preventDefault();
  const tekaTekiModal2 = document.querySelector("#teka-teki-modal2");
  if (tekaTekiModal2) tekaTekiModal2.style.display = "none";
});

// click luar teka teki modal
window.addEventListener("click", function (e) {
  const tekaTekiModal2 = document.querySelector("#teka-teki-modal2");
  if (e.target === tekaTekiModal2) {
    tekaTekiModal2.style.display = "none";
  }
});


