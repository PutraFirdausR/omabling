import { defineStore } from "pinia";

export const useNavbarStore = defineStore("navbar", {
  state: () => ({
    active: "home",
    isDropdownOpen: false,
    isScrolled: false,
  }),

  actions: {
    setActive(menu) {
      this.active = menu;
    },

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    setScroll(value) {
      this.isScrolled = value;
    },

    initializeActiveFromRoute() {
      const path = window.location.pathname;

      switch (path) {
        case "/":
          this.active = "home";
          break;
        case "/about-us":
          this.active = "about-us";
          break;
        case "/product":
          this.active = "product";
          break;
        case "/contact":
          this.active = "contact";
          break;
        default:
          this.active = "home";
      }
    },
  },

  persist: true,
});
