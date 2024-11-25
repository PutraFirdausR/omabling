<template>
  <div class="contact pt-14 lg:pt-0 pb-14">
    <div
      class="flex flex-col justify-center items-center text-center px-10 pb-8"
    >
      <h1 class="text-4xl font-semibold">Contact</h1>
      <p class="text-md text-[#9ca3af]">
        Silahkan hubungi kami jika anda memiliki saran kepada kami
      </p>
    </div>

    <div
      class="flex flex-col lg:flex-row lg:px-10 px-5 justify-between mb-5 gap-6"
    >
      <div class="lg:w-1/2 bg-white rounded-lg shadow-lg p-6 lg:p-10">
        <h3 class="text-2xl font-bold mb-4">Get In Touch</h3>
        <form id="contactForm" name="contactForm" class="contactForm">
          <div class="grid grid-cols-1 gap-4">
            <div class="flex items-center text-sm gap-8">
              <i
                class="fa-solid fa-location-dot text-3xl"
                style="color: #50b356"
              ></i>
              <p>Jl. Sunan Kalijaga 03/03 Kadilangu Demak Jawa Tengah</p>
            </div>
            <div class="flex items-center text-sm gap-8">
              <i class="fa-solid fa-phone text-3xl" style="color: #50b356"></i>
              <a href="tel://081325618055" class="text-[#50b356]"
                >+62 813-2561-8055</a
              >
            </div>
            <div class="flex items-center text-sm gap-8">
              <i
                class="fa-solid fa-envelope text-3xl"
                style="color: #50b356"
              ></i>
              <a href="mailto:omabling36@gmail.com" class="text-[#50b356]"
                >omabling36@gmail.com</a
              >
            </div>
            <div class="flex items-center text-sm gap-8">
              <i
                class="fa-brands fa-instagram text-3xl"
                style="color: #50b356"
              ></i>
              <a
                href="https://www.instagram.com/omahbling/"
                class="text-[#50b356]"
                >@omahbling</a
              >
            </div>
            <div class="flex items-center text-sm gap-8">
              <i
                class="fa-brands fa-tiktok text-3xl"
                style="color: #50b356"
              ></i>
              <a
                href="https://www.tiktok.com/@omahbling?is_from_webapp=1&sender_device=pc"
                class="text-[#50b356]"
                >@omahbling</a
              >
            </div>
          </div>
        </form>
      </div>
      <div class="rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7921.871535336136!2d110.645769!3d-6.898286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70ebc4739cf289%3A0x5aa0dbe6d244d5dd!2sJl.%20Sunan%20Kalijaga%2C%20Kabupaten%20Demak%2C%20Jawa%20Tengah%2C%20Indonesia!5e0!3m2!1sid!2sus!4v1731752925842!5m2!1sid!2sus"
          width="600"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  margin-top: 80px;
}

@media (min-width: 1024px) {
  .contact {
    margin-top: 80px;
    gap: 0;
  }
}
</style>
