const slides = document.getElementById('slides');
let index = 0;

function showNextSlide() {
  index = (index + 1) % 3; // Jumlah slide (ubah jika jumlah gambar berubah)
  slides.style.transform = translateX(-${index * 100}vw);
}

setInterval(showNextSlide, 3000); // Ganti slide setiap 3 detik