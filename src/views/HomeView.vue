<script setup>
import { RouterLink, useRouter } from "vue-router";

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
  <div
    class="hero min-h-screen"
    style="background-image: url(/src/assets/image/hero.jpeg)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
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
