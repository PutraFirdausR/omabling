<template>
  <div
    class="relative w-full p-10 lg:p-0 max-w-4xl mx-auto flex flex-col justify-center items-center"
  >
    <h1 class="text-3xl font-bold text-center">Gallery Omabling</h1>
    <p class="text-md text-[#9ca3af] pb-8">Dokumentasi Omabling</p>

    <!-- Carousel container -->
    <div class="relative overflow-hidden rounded-lg shadow-lg">
      <!-- Images container -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="min-w-full h-[400px] relative"
        >
          <img
            :src="image.url"
            :alt="image.alt"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Navigation arrows -->
      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <!-- Dots indicators -->
      <div
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        <button
          v-for="(_, index) in images"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-colors duration-200"
          :class="currentIndex === index ? 'bg-white' : 'bg-white/50'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  {
    url: "/src/assets/image/1.jpg",
    alt: "Dokumentasi",
  },
  {
    url: "/src/assets/image/2.jpg",
    alt: "Dokumentasi",
  },
  {
    url: "/src/assets/image/3.jpg",
    alt: "Dokumentasi",
  },
  {
    url: "/src/assets/image/4.jpg",
    alt: "Dokumentasi",
  },
];

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value =
    currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000);
};

const stopAutoSlide = () => {
  if (intervalId) clearInterval(intervalId);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>
