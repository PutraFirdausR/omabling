<script setup>
import { ref } from "vue";
import Button from "@/ui/Button.vue";

// Array untuk menyimpan state visibility description untuk setiap card
const visibleDescriptions = ref(new Array(12).fill(false));

// Toggle visibility untuk description tertentu
const toggleDescription = (index) => {
  visibleDescriptions.value[index] = !visibleDescriptions.value[index];
};
</script>

<template>
  <div class="product pt-14 lg:pt-0 px-8 lg:px-8">
    <div
      class="flex flex-col justify-center items-center text-center lg:px-10 pb-8"
    >
      <h1 class="text-4xl font-semibold">Product</h1>
      <p class="text-md text-[#9ca3af]">Ikuti cara pemesanan dibawah ini</p>
      <ul class="steps text-sm">
        <li class="step">Pilih Product</li>
        <li class="step">Klik Buy Now</li>
        <li class="step">Lanjutkan ke WA</li>
        <li class="step">Sertakan Jumlah dan Alamat</li>
      </ul>
    </div>
  </div>

  <div
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 px-2 md:px-8 pb-14"
  >
    <!-- BlingBrow Original -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/blingbrow 1.png"
          alt="BlingBrow Original"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">BlingBrow Original</h2>

        <!-- Desktop description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Terbuat dari bahan pilihan, Coklat dan Belimbing yang dipadukan
          menjadi satu menimbulkan rasa manis yang unik.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(0)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[0] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[0]" class="mb-2 text-xs">
            Terbuat dari bahan pilihan, Coklat dan Belimbing yang dipadukan
            menjadi satu menimbulkan rasa manis yang unik.
          </p>
        </div>

        <h1 class="font-semibold text-sm md:text-xl">Rp.25.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&text=Hallo Omabling, saya ingin pesan BlingBrow Original"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
              >Buy Now</Button
            >
          </a>
        </div>
      </div>
    </div>

    <!-- BlingBrow Cheese -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/blingbrow 2.png"
          alt="Blingbrow Cheese"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">BlingBrow Cheese</h2>

        <!-- Desktop description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Terbuat dari bahan pilihan, Coklat, Keju dan Belimbing yang dipadukan
          menjadi satu menimbulkan rasa manis yang unik.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Terbuat dari bahan pilihan, Coklat, Keju dan Belimbing yang
            dipadukan menjadi satu menimbulkan rasa manis yang unik.
          </p>
        </div>

        <h1 class="font-semibold text-sm md:text-xl">Rp.25.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&text=Hallo Omabling, saya ingin pesan BlingBrow Cheese"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
              >Buy Now</Button
            >
          </a>
        </div>
      </div>
    </div>

    <!-- MoBlingBrow -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/blingbrow 3.png"
          alt="Moblingbrow"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">MoBlingBrow</h2>

        <!-- Desktop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Brownies belimbing gluten free buat kamu yang mau ngemil sehat terbuat
          dari bahan Coklat dan belimbing menimbulkan rasa yang lezat.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Brownies belimbing gluten free buat kamu yang mau ngemil sehat
            terbuat dari bahan Coklat dan belimbing menimbulkan rasa yang lezat.
          </p>
        </div>

        <h1 class="font-semibold text-sm md:text-xl">Rp.35.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan MoBlingBrow"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Brownies Panggang -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/brownies 2.png"
          alt="Brownies Panggang"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">Brownies Panggang</h2>

        <!-- Dekstop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Brownies Panggang, dipanggang tapi tidak keras dan manisnya pas, cocok
          sebagai hantaran, pembelian sudah termasuk goodiebag.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Brownies Panggang, dipanggang tapi tidak keras dan manisnya pas,
            cocok sebagai hantaran, pembelian sudah termasuk goodiebag.
          </p>
        </div>

        <h1 class="font-semibold text-sm md:text-xl">Rp.30.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan Brownies Panggang"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Bolen Belimbing -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/bolen.png"
          alt="Bolen Belimbing"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">Bolen Belimbing</h2>

        <!-- Dekstop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Bolen Belimbing dengan bahan belimbing segar menciptakan rasa yang
          lezat, berpadu dengan tekstur lembut dan aroma menggoda.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Bolen Belimbing dengan bahan belimbing segar menciptakan rasa yang
            lezat, berpadu dengan tekstur lembut dan aroma menggoda.
          </p>
        </div>

        <h1 class="font-semibold text-sm md:text-xl">Rp.45.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan Bolen Belimbing"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Majambling -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/majambling.png"
          alt="Majambling"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">Majambling</h2>

        <!-- Dekstop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Belimbing yang dibalut dengan coklat premium dan teksturnya legit dan
          rasanya manis tidak eneg yang membuat ketagihan.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Belimbing yang dibalut dengan coklat premium dan teksturnya legit
            dan rasanya manis tidak eneg yang membuat ketagihan.
          </p>
        </div>
        <h1 class="font-semibold text-sm md:text-xl">Rp.40.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan Majambling"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Onde-onde Ketawa -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/onde.png"
          alt="Onde-onde Ketawa"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">Onde-onde Ketawa</h2>

        <!-- Dekstop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Onde-onde ketawa yang dibuat dari tepung dan buah belimbing segar,
          dipadu dengan taburan wijen melimpah yang harum.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Onde-onde ketawa yang dibuat dari tepung dan buah belimbing segar,
            dipadu dengan taburan wijen melimpah yang harum.
          </p>
        </div>
        <h1 class="font-semibold text-sm md:text-xl">Rp.20.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan Onde-onde Ketawa"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Bolen Piscok Mini -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/bolen piscok.png"
          alt="Bolen Piscok Mini"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">Bolen Piscok Mini</h2>

        <!-- Dekstop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Pisang raja yang manis dan lembut berpadu sempurna dengan cokelat yang
          lumer di mulut, dan dibalut dalam lapisan pastry.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Pisang raja yang manis dan lembut berpadu sempurna dengan cokelat
            yang lumer di mulut, dan dibalut dalam lapisan pastry.
          </p>
        </div>
        <h1 class="font-semibold text-sm md:text-xl">Rp.40.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan Bolen Piscok"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Lakeke Kering -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/lakeke.png"
          alt="Lakeke Kering"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">Lakeke Kering</h2>

        <!-- Dekstop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Kentang serut renyah, dikenal sebagai kentang mustofa, dipadukan
          dengan bumbu rempah khas resep keluarga turun-temurun.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Kentang serut renyah, dikenal sebagai kentang mustofa, dipadukan
            dengan bumbu rempah khas resep keluarga turun-temurun.
          </p>
        </div>
        <h1 class="font-semibold text-sm md:text-xl">Rp.30.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan Lakeke Kering"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Stik Belimbing -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/stik.png"
          alt="Stik Belimbing"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">Stik Belimbing</h2>

        <!-- Dekstop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Stik belimbing dengan dua pilihan rasa istimewa varian original yang
          autentik dan keju yang gurih meleleh di lidah.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Stik belimbing dengan dua pilihan rasa istimewa varian original yang
            autentik dan keju yang gurih meleleh di lidah.
          </p>
        </div>
        <h1 class="font-semibold text-sm md:text-xl">Rp.15.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan Stik Belimbing"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Lakeke Teri -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/lakeke teri.png"
          alt="Lakeke Teri"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">Lakeke Teri</h2>

        <!-- Dekstop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Dibuat dari teri pilihan terbaik, dipadukan dengan rempah-rempah
          warisan leluhur yang kaya rasa. dan dibuat dengan penuh cinta.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Dibuat dari teri pilihan terbaik, dipadukan dengan rempah-rempah
            warisan leluhur yang kaya rasa. dan dibuat dengan penuh cinta.
          </p>
        </div>
        <h1 class="font-semibold text-sm md:text-xl">Rp.30.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan Lakeke Teri"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Ombling -->
    <div class="card bg-base-100 shadow-lg">
      <figure class="p-2 md:p-5">
        <img
          src="/src/assets/image/ombling.png"
          alt="Ombling"
          class="rounded-xl w-full h-auto object-cover"
        />
      </figure>
      <div class="card-body p-3 md:p-5 items-center text-center">
        <h2 class="card-title text-sm md:text-base">OmBling</h2>

        <!-- Dekstop Description -->
        <p class="hidden lg:block text-sm lg:text-base">
          Rasakan kelezatan dari bahan-bahan pilihan berkualitas yang dipadukan
          dengan sentuhan manis dan segar dari selai belimbing.
        </p>

        <!-- Mobile description toggle button -->
        <div class="lg:hidden w-full">
          <Button
            @click="toggleDescription(1)"
            class="w-full mb-2 bg-[#f99999] text-sm py-1"
          >
            {{ visibleDescriptions[1] ? "Sembunyikan Detail" : "Lihat Detail" }}
          </Button>
          <p v-if="visibleDescriptions[1]" class="mb-2 text-xs">
            Rasakan kelezatan dari bahan-bahan pilihan berkualitas yang
            dipadukan dengan sentuhan manis dan segar dari selai belimbing.
          </p>
        </div>

        <h1 class="font-semibold text-sm md:text-xl">Rp.25.000</h1>
        <div class="card-actions">
          <a
            href="https://api.whatsapp.com/send/?phone=6281325618055&amp;text=Hallo Omabling, saya ingin pesan OmBling"
          >
            <Button
              class="flex items-center justify-center text-center w-full md:w-32 py-1 lg:py-3"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  margin-top: 80px; /* Mengurangi margin top */
}

@media (min-width: 1024px) {
  .about {
    margin-top: 80px;
    gap: 0; /* Menghilangkan gap pada desktop */
  }
}
</style>
