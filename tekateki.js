// teka teki 2
// open teka teki modal
document
  .querySelector("#teka-teki2-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const tekaTekiModal2 = document.querySelector("#teka-teki-modal2");
    if (tekaTekiModal2) tekaTekiModal2.style.display = "flex";
  });

// close teka teki modal
document
  .querySelector("#close-teka-teki2")
  .addEventListener("click", function (e) {
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

// ketika click next maka teka teki 1 akan hilang dan teka teki 2 akan muncul
document.querySelector(".next").addEventListener("click", function (e) {
  e.preventDefault();
  const tekaTekiModal2 = document.querySelector("#teka-teki-modal2");
  const tekaTekiModal3 = document.querySelector("#teka-teki-modal3");
  if (tekaTekiModal2) tekaTekiModal2.style.display = "none";
  if (tekaTekiModal3) tekaTekiModal3.style.display = "flex";
});

// ketika click back maka teka teki 2 akan hilang dan teka teki 1 akan muncul
document.querySelector(".back").addEventListener("click", function (e) {
  e.preventDefault();
  const tekaTekiModal2 = document.querySelector("#teka-teki-modal2");
  const tekaTekiModal3 = document.querySelector("#teka-teki-modal3");
  if (tekaTekiModal3) tekaTekiModal3.style.display = "none";
  if (tekaTekiModal2) tekaTekiModal2.style.display = "flex";
});

// teka teki next

document.querySelector(".back").addEventListener("click", function (e) {
  e.preventDefault();
  const tekaTekiModal2 = document.querySelector("#teka-teki-modal2");
  if (tekaTekiModal2) tekaTekiModal2.style.display = "flex";
});

// close teka teki modal
document
  .querySelector("#close-teka-teki3")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const tekaTekiModal3 = document.querySelector("#teka-teki-modal3");
    if (tekaTekiModal3) tekaTekiModal3.style.display = "none";
  });

// click luar teka teki modal
window.addEventListener("click", function (e) {
  const tekaTekiModal3 = document.querySelector("#teka-teki-modal3");
  if (e.target === tekaTekiModal3) {
    tekaTekiModal3.style.display = "none";
  }
});

// ketika klik saksi-link
document.querySelector(".saksi-link").addEventListener("click", function (e) {
  e.preventDefault();
  const saksi = document.querySelector("#saksi-modal");
  if (saksi) saksi.style.display = "flex";
});

document.querySelector("#closex").addEventListener("click", function (e) {
  e.preventDefault();
  const saksi = document.querySelector("#saksi-modal");
  if (saksi) saksi.style.display = "none";
});

window.addEventListener("click", function (e) {
  const saksi = document.querySelector("#saksi-modal");
  if (e.target === saksi) {
    saksi.style.display = "none";
  }
});

// kartu link modal 1-7

//kartu link modal 1 start

document.querySelector(".kartu-link").addEventListener("click", function (e) {
  e.preventDefault();
  const kartuLinkModal1 = document.querySelector("#kartu-link-modal1");
  if (kartuLinkModal1) kartuLinkModal1.style.display = "flex";
});

document
  .querySelector("#close-kartu-link1")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const kartuLinkModal1 = document.querySelector("#kartu-link-modal1");
    if (kartuLinkModal1) kartuLinkModal1.style.display = "none";
  });

window.addEventListener("click", function (e) {
  const kartuLinkModal1 = document.querySelector("#kartu-link-modal1");
  if (e.target === kartuLinkModal1) {
    kartuLinkModal1.style.display = "none";
  }
});

//kartu link modal 1 end

// kartu link modal 2 start

document.querySelector(".kartu-link2").addEventListener("click", function (e) {
  e.preventDefault();
  const kartuLinkModal2 = document.querySelector("#kartu-link-modal2");
  if (kartuLinkModal2) kartuLinkModal2.style.display = "flex";
});

document
  .querySelector("#close-kartu-link2")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const kartuLinkModal2 = document.querySelector("#kartu-link-modal2");
    if (kartuLinkModal2) kartuLinkModal2.style.display = "none";
  });

window.addEventListener("click", function (e) {
  const kartuLinkModal2 = document.querySelector("#kartu-link-modal2");
  if (e.target === kartuLinkModal2) {
    kartuLinkModal2.style.display = "none";
  }
});

//kartu link modal 2 end

// kartu link modal 3 start

document.querySelector(".kartu-link3").addEventListener("click", function (e) {
  e.preventDefault();
  const kartuLinkModal3 = document.querySelector("#kartu-link-modal3");
  if (kartuLinkModal3) kartuLinkModal3.style.display = "flex";
});

document
  .querySelector("#close-kartu-link3")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const kartuLinkModal3 = document.querySelector("#kartu-link-modal3");
    if (kartuLinkModal3) kartuLinkModal3.style.display = "none";
  });

window.addEventListener("click", function (e) {
  const kartuLinkModal3 = document.querySelector("#kartu-link-modal3");
  if (e.target === kartuLinkModal3) {
    kartuLinkModal3.style.display = "none";
  }
});

//kartu link modal 3 end

// kartu link modal 4 start

document.querySelector(".kartu-link4").addEventListener("click", function (e) {
  e.preventDefault();
  const kartuLinkModal4 = document.querySelector("#kartu-link-modal4");
  if (kartuLinkModal4) kartuLinkModal4.style.display = "flex";
});

document
  .querySelector("#close-kartu-link4")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const kartuLinkModal4 = document.querySelector("#kartu-link-modal4");
    if (kartuLinkModal4) kartuLinkModal4.style.display = "none";
  });

window.addEventListener("click", function (e) {
  const kartuLinkModal4 = document.querySelector("#kartu-link-modal4");
  if (e.target === kartuLinkModal4) {
    kartuLinkModal4.style.display = "none";
  }
});

//kartu link modal 4 end

// kartu link modal 5 start

document.querySelector(".kartu-link5").addEventListener("click", function (e) {
  e.preventDefault();
  const kartuLinkModal5 = document.querySelector("#kartu-link-modal5");
  if (kartuLinkModal5) kartuLinkModal5.style.display = "flex";
});

document
  .querySelector("#close-kartu-link5")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const kartuLinkModal5 = document.querySelector("#kartu-link-modal5");
    if (kartuLinkModal5) kartuLinkModal5.style.display = "none";
  });

window.addEventListener("click", function (e) {
  const kartuLinkModal5 = document.querySelector("#kartu-link-modal5");
  if (e.target === kartuLinkModal5) {
    kartuLinkModal5.style.display = "none";
  }
});

//kartu link modal 5 end

// kartu link modal 6 start

document.querySelector(".kartu-link6").addEventListener("click", function (e) {
  e.preventDefault();
  const kartuLinkModal6 = document.querySelector("#kartu-link-modal6");
  if (kartuLinkModal6) kartuLinkModal6.style.display = "flex";
});

document
  .querySelector("#close-kartu-link6")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const kartuLinkModal6 = document.querySelector("#kartu-link-modal6");
    if (kartuLinkModal6) kartuLinkModal6.style.display = "none";
  });

window.addEventListener("click", function (e) {
  const kartuLinkModal6 = document.querySelector("#kartu-link-modal6");
  if (e.target === kartuLinkModal6) {
    kartuLinkModal6.style.display = "none";
  }
});

//kartu link modal 6 end

// kartu link modal 7 start

document.querySelector(".kartu-link7").addEventListener("click", function (e) {
  e.preventDefault();
  const kartuLinkModal7 = document.querySelector("#kartu-link-modal7");
  if (kartuLinkModal7) kartuLinkModal7.style.display = "flex";
});

document
  .querySelector("#close-kartu-link7")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const kartuLinkModal7 = document.querySelector("#kartu-link-modal7");
    if (kartuLinkModal7) kartuLinkModal7.style.display = "none";
  });

window.addEventListener("click", function (e) {
  const kartuLinkModal7 = document.querySelector("#kartu-link-modal7");
  if (e.target === kartuLinkModal7) {
    kartuLinkModal7.style.display = "none";
  }
});

//kartu link modal 7 end

// ending teka teki
// Ambil elemen yang dibutuhkan
const submitCodeBtn = document.querySelector("#submit-code");
const answerInput = document.querySelector("#answer-input");
const ending = document.querySelector("#ending");

// Tambahkan event klik pada tombol kirim
if (submitCodeBtn) {
  submitCodeBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Ambil teks, ubah ke huruf kecil semua, hapus spasi depan/belakang
    const code = answerInput.value.toLowerCase().trim();
    console.log("Code entered:", code);

    if (code === "the ending") {
      // Jika benar, tampilkan ending
      console.log("Correct code, showing ending");
      // Tutup modal teka-teki dulu
      const tekaTekiModal3 = document.querySelector("#teka-teki-modal3");
      if (ending) {
        ending.style.display = "flex";
        ending.style.zIndex = "10001";
      }
    } else {
      // Jika salah
      console.log("Incorrect code");
      alert("Code salah! Silahkan cari petunjuk di kartu-kartu sebelumnya.");
    }
  });
}

// Logika menutup modal ending (tombol X)
const closeEnding = document.querySelector("#close-ending");
if (closeEnding) {
  closeEnding.addEventListener("click", function (e) {
    e.preventDefault();
    ending.style.display = "none";
  });
}
