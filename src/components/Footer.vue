<template>
  <footer
    class="footer footer-center bg-base-200 text-base-content rounded p-10"
  >
    <nav class="grid grid-flow-col gap-4">
      <RouterLink to="/" class="link link-hover">Home</RouterLink>
      <RouterLink to="/about-us" class="link link-hover">About Us</RouterLink>
      <RouterLink to="/product" class="link link-hover">Product</RouterLink>
      <RouterLink to="/contact" class="link link-hover">Contact</RouterLink>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/omahbling/">
          <i class="fa-brands fa-instagram text-2xl" style="color: #50b356"></i>
        </a>
        <a
          href="https://www.tiktok.com/@omahbling?is_from_webapp=1&sender_device=pc"
        >
          <i class="fa-brands fa-tiktok text-2xl" style="color: #50b356"></i>
        </a>
      </div>
    </nav>
    <aside>
      <p>Copyright © 2024 - All right reserved by OMABLING</p>
    </aside>
  </footer>
</template>
