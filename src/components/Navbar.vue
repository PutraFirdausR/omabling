<script setup>
import { onMounted, onUnmounted, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useNavbarStore } from "@/stores/navbar";
import Button from "@/ui/Button.vue";

const navbarStore = useNavbarStore();
const route = useRoute();

const handleScroll = () => {
  navbarStore.setScroll(window.scrollY > 0);
};

const menuDefault = (menu) => {
  navbarStore.setActive(menu);
  navbarStore.isDropdownOpen = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  navbarStore.initializeActiveFromRoute();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(
  () => route.path,
  () => {
    navbarStore.initializeActiveFromRoute();
  }
);
</script>

<template>
  <div
    class="navbar fixed h-20 top-0 left-0 w-full bg-white lg:bg-transparent flex items-center justify-between py-2 lg:px-20 z-50"
    :class="{ 'navbar-scroll': navbarStore.isScrolled }"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost lg:hidden"
          @click="navbarStore.toggleDropdown"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <nav
          tabindex="0"
          v-show="navbarStore.isDropdownOpen"
          class="menu menu-sm dropdown-content bg-[#50b356] rounded-box mt-3 w-52 p-3 shadow"
        >
          <!-- Mobile Navbar -->
          <div class="flex fixed gap-5 lg:text-lg flex-col lg:flex-row">
            <RouterLink
              to="/"
              class="lg:hover:scale-110 text-white lg:focus:border-b-2 lg:border-[#50b356] transition-all"
              @click="menuDefault('home')"
              >Home</RouterLink
            >

            <RouterLink
              to="/about-us"
              class="lg:hover:scale-110 text-white lg:focus:border-b-2 lg:border-[#50b356] transition-all"
              @click="menuDefault('about-us')"
              >About Us</RouterLink
            >
            <RouterLink
              to="/product"
              class="lg:hover:scale-110 text-white lg:focus:border-b-2 lg:border-[#50b356] transition-all"
              @click="menuDefault('product')"
              >Product</RouterLink
            >
            <RouterLink
              to="/contact"
              class="lg:hover:scale-110 text-white lg:focus:border-b-2 lg:border-[#50b356] transition-all"
              @click="menuDefault('contact')"
              >Contact</RouterLink
            >
          </div>
        </nav>
      </div>
      <!-- Logo -->
      <RouterLink to="/">
        <img src="/src/assets/image/logo bambwi.png" alt="Logo" class="w-14" />
      </RouterLink>
    </div>
    <!-- Desktop Navbar -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <div class="flex gap-5 lg:text-lg flex-col lg:flex-row">
          <RouterLink
            to="/"
            :class="{ 'active-border': navbarStore.active === 'home' }"
            class="nav-link lg:hover:scale-110 lg:text-[#50b356] transition-all hover:text-[#50b356] relative"
            @click="menuDefault('home')"
            >Home</RouterLink
          >

          <RouterLink
            to="/about-us"
            :class="{ 'active-border': navbarStore.active === 'about-us' }"
            class="nav-link lg:hover:scale-110 lg:text-[#50b356] transition-all hover:text-[#50b356] relative"
            @click="menuDefault('about-us')"
            >About Us</RouterLink
          >
          <RouterLink
            to="/product"
            :class="{ 'active-border': navbarStore.active === 'product' }"
            class="nav-link lg:hover:scale-110 lg:text-[#50b356] transition-all hover:text-[#50b356] relative"
            @click="menuDefault('product')"
            >Product</RouterLink
          >
          <RouterLink
            to="/contact"
            :class="{ 'active-border': navbarStore.active === 'contact' }"
            class="nav-link lg:hover:scale-110 lg:text-[#50b356] transition-all hover:text-[#50b356] relative"
            @click="menuDefault('contact')"
            >Contact</RouterLink
          >
        </div>
      </ul>
    </div>
    <div class="navbar-end">
      <!-- Button -->
      <a
        href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin bertanya-tanya"
      >
        <Button>Tanya Omabling</Button>
      </a>
    </div>
  </div>
</template>
