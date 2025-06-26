document.getElementById("testiForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const komentar = document.getElementById("komentar").value;
  const pesan = document.getElementById("pesan");

  fetch("https://script.google.com/macros/s/AKfycbyCT37jHiQj1LvLDFGMgkgDDIcPIDl5LfFxvMqB-5L2Lw--LTDDpYO6ZVB4e21VqAW39w/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `nama=${encodeURIComponent(nama)}&komentar=${encodeURIComponent(komentar)}`
  })
  .then(() => {
    pesan.innerHTML = "<span style='color:green'>Ulasan berhasil dikirim!</span>";
    document.getElementById("testiForm").reset();
  })
  .catch(() => {
    pesan.innerHTML = "<span style='color:red'>Terjadi kesalahan. Coba lagi.</span>";
  });
});