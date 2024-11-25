<script setup>
import { RouterLink, useRouter } from "vue-router";
import heroImage from "@/assets/image/hero.jpeg"; // Import gambar
import Button from "@/ui/Button.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";

const router = useRouter();

const handleProductClick = () => {
  router.push("/product");
  const productLink = document.querySelector('a[href="/product"]');
  if (productLink) {
    productLink.click();
  }
};
</script>

<template>
  <div class="hero min-h-screen relative">
    <!-- Menggunakan div terpisah untuk background dengan gambar yang diimport -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${heroImage})` }"
    ></div>
    <div class="hero-overlay bg-opacity-60 absolute inset-0"></div>
    <div class="hero-content text-neutral-content text-center relative z-10">
      <div class="max-w-lg">
        <p class="uppercase font-semibold text-xl mb-3">Oleh oleh Khas Demak</p>
        <h1 class="mb-3 text-5xl font-bold uppercase">Omah Jambu Belimbing</h1>
        <p class="mb-10 text-lg">Delicious Unique And Authentic</p>
        <div class="flex justify-center">
          <RouterLink to="/product" @click="handleProductClick">
            <Button class="flex items-center justify-center text-center w-32">
              Lihat Product
            </Button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <!-- About View Comp -->
  <AboutView />
  <!-- Product View Comp -->
  <div class="pt-14">
    <ImageCarousel />
  </div>
  <!-- Contact View Comp -->
  <ContactView />
</template>
