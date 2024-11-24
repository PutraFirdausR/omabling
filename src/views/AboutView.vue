<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const carouselImages = [
  "/src/assets/image/1.jpg",
  "/src/assets/image/2.jpg",
  "/src/assets/image/3.jpg",
  "/src/assets/image/4.jpg",
];

let currentIndex = ref(0);
let intervalId = null;

const startCarousel = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselImages.length;
  }, 3000);
};

const stopCarousel = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  stopCarousel();
});
</script>

<template>
  <div
    class="about flex flex-col justify-center items-center pt-14 lg:pt-0 lg:grid grid-cols-2 lg:px-14 gap-0"
  >
    <div class="hidden lg:flex justify-center custom-shadow">
      <img src="/src/assets/image/logo bambwi.png" alt="Logo" class="w-80" />
    </div>

    <div class="text-center text-base px-8 lg:px-12 mb-5 lg:text-left">
      <h1
        class="text-2xl font-semibold text-[#50b356] flex justify-center lg:justify-start pb-2"
      >
        Tentang Kami
      </h1>
      <p class="pb-3 lg:pt-2">
        Pada awalnya meneruskan usaha kecil-kecilan orangtua yang stagnan tidak
        ada perkembangan karena kurangnya inovasi dalam varian dan kemampuan
        managerial ataupun mengikuti era kekinian,setelah dibuatkan perijinan
        maka mulailah bergerak dan berinovasi dalam produk aneka olahan kue dan
        snack dengan mendayagunakan bahan-bahan lokal sehingga menjadi produk
        yang khas kota Demak.
      </p>
      <p>
        Kami menciptakan kue kue baru dari bahan dasar buah lokal karena besar
        harapan kami ini dapat juga membantu petani lokal.Usaha kami ini kami
        yakin dapat maju dan berkembang menjadi besar sehingga layak untuk
        menjadi besar.
      </p>
    </div>
  </div>

  <div
    class="flex flex-col justify-center items-center text-center px-10 pt-32 lg:pt-14"
  >
    <h1 class="font-bold text-4xl">Kenapa Memilih Kami?</h1>
    <p class="text-md text-[#9ca3af]">
      Makanan Sehat Lezat, Bahan terbaik & Berkualitas
    </p>
  </div>

  <div
    class="flex flex-col lg:flex-row flex-wrap justify-center items-center pt-8 mb-5 gap-8 pb-14"
  >
    <div class="card w-96 shadow-lg bg-white">
      <div class="card-body items-center text-center">
        <i class="fa-solid fa-dollar-sign text-5xl" style="color: #50b356"></i>
        <h2 class="card-title font-bold text-2xl">Harga Terjangkau</h2>
        <p>Dapatkan harga Produk murah dengan penawaran menarik.</p>
      </div>
    </div>

    <div class="card w-96 shadow-lg bg-white">
      <div class="card-body items-center text-center">
        <i class="fa-solid fa-star text-5xl" style="color: #50b356"></i>
        <h2 class="card-title font-bold text-2xl">Berkualitas</h2>
        <p>Dibuat menggunakan bahan-bahan berkualitas.</p>
      </div>
    </div>

    <div class="card w-96 shadow-lg bg-white">
      <div class="card-body items-center text-center">
        <i class="fa-solid fa-truck-fast text-5xl" style="color: #50b356"></i>
        <h2 class="card-title font-bold text-2xl">Pemesanan Mudah</h2>
        <p>Sistem pemesanan yang mudah dengan proses yang sederhana.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  margin-top: 80px; /* Mengurangi margin top */
}

@media (min-width: 1024px) {
  .about {
    margin-top: 80px;
    gap: 0; /* Menghilangkan gap pada desktop */
  }
}
</style>
