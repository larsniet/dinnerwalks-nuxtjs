<template>
  <div>
    <Navigation />
    <main class="main_container">
      <Nuxt />
    </main>
    <div class="top" :class="{ slideIn: scrollPosition > 50 }">
      <a class="top_button" v-scroll-to="'body'">
        <img
          class="top_image"
          src="~/assets/images/top.png"
          alt="Go to top chevron"
        />
      </a>
    </div>
    <div class="cookies" v-if="!cookiesAccepted">
      <div class="cookies_message">
        <p class="cookies_text">
          Wij gebruiken Cookies om een betere gebruikerservaring te kunnen
          bieden.
          <a :href="`/officieel/cookiebeleid.pdf`" target="_blank"
            >Bekijk ons cookiebeleid.</a
          >
        </p>
      </div>
      <div class="cookies_button">
        <button class="cookies_accept" @click="acceptCookies">
          Accepteren
        </button>
      </div>
    </div>
    <Footer />
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Dinnerwalks",
        "url": "https://www.dinnerwalks.nl",
        "sameAs": [
          "https://www.instagram.com/dinnerwalks/",
          "https://www.facebook.com/DINNERWALKS/"
        ]
      }
    </script>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name: "App",
  data() {
    return {
      scrollPosition: null,
      cookiesAccepted: false,
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Dinnerwalks",
        url: "https://dinnerwalks.nl",
        sameAs: [
          "https://www.instagram.com/dinnerwalks/",
          "https://www.facebook.com/DINNERWALKS/"
        ]
      }
    };
  },
  head() {
    return {
      script: [{ type: "application/ld+json", json: this.structuredData }]
    };
  },
  components: {
    Navigation,
    Footer
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    acceptCookies() {
      localStorage.setItem("cookiesAccepted", true);
      this.cookiesAccepted = true;
    }
  },
  mounted() {
    if (localStorage.getItem("cookiesAccepted")) {
      this.cookiesAccepted = true;
    }
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style>
/* Main styling */
@font-face {
  font-family: "DK Whale Song";
  src: local("DK Whale Song"),
    url(~/assets/fonts/DK_Whale_Song.otf) format("truetype");
}
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
.main_container {
  padding: 40px 100px;
  background-color: white;
  height: 100%;
  margin: 100px 0;
  z-index: 1;
}
.main_container > .checkout {
  margin-left: -100px;
}
input:focus,
input:active,
button:focus,
button:active,
textarea:focus,
textarea:active,
select:focus,
select:active {
  outline: none;
}
.mb-100 {
  margin-bottom: 100px !important;
}

/* Header */
.header {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
}
.header--title {
  color: #373737;
  font-size: 40px;
  font-weight: bolder;
  line-height: 45px;
}
.header--sub {
  margin-top: 30px;
  color: #888888;
  font-size: 20px;
  font-weight: 500;
}

/* Flexcontainers */
.flex_container {
  display: flex;
}
.flex_container--reversed {
  flex-direction: row-reverse;
}

/* Scroll to top button */
.top {
  width: 40px;
  height: auto;
  cursor: pointer;
  z-index: 99;
  position: fixed;
  right: -50px;
  bottom: 40px;
  transition: 0.6s;
}
.slideIn {
  right: 80px;
}
.top_button {
  position: relative;
  cursor: pointer;
}
.top_image {
  width: 70px;
  animation: pulse 2s ease-in-out alternate infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Bolletjes */
.bolletjes {
  position: relative;
}
.bolletjes--img1 {
  position: absolute;
  width: 150px;
  height: auto;
  left: -130px;
}
.bolletjes--img2 {
  position: absolute;
  top: 50px;
  right: -50px;
  width: 150px;
  height: auto;
}
.bolletjes--img3 {
  position: absolute;
  top: 500px;
  left: -300px;
  width: 350px;
}
.bolletjes--img4 {
  position: absolute;
  top: 1400px;
  right: -120px;
  width: 150px;
}

/* Cookies */
.cookies {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(233, 233, 233);
  z-index: 9999;
  display: flex;
}
.cookies_message {
  width: 80%;
  padding: 20px 50px;
}
.cookies_text {
  padding: 20px 50px;
}
.cookies_button {
  width: 20%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cookies_accept {
  background-color: #ffb496;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 17px;
  font-weight: 600;
  color: white;
  border: 3px solid #ffb496;
  transition: 0.6s all ease;
  box-shadow: 18px 15px 23px -13px rgba(0, 0, 0, 0.1);
}
.cookies_accept:hover {
  background-color: transparent !important;
  color: #ffb496;
  cursor: pointer;
}

/* Responsive */
@media only screen and (max-width: 1000px) {
  .bolletjes--img2 {
    right: -160px;
    top: 100px;
  }
  .cookies_accept {
    justify-content: start;
    align-items: flex-start;
  }
}
@media only screen and (max-width: 900px) {
  .main_container {
    padding: 40px 60px;
  }
}
@media screen and (max-width: 800px) {
  .bolletjes--img1 {
    top: 90px;
  }
  .bolletjes--img3 {
    width: 320px;
  }
  .bolletjes--img4 {
    top: 1200px;
  }
  .flex_container {
    flex-direction: column;
  }
  .flex_reversed {
    flex-direction: column-reverse;
  }
  .cookies_message {
    width: 60%;
    text-align: left;
    padding: 0;
  }
  .cookies .cookies_button {
    width: 40%;
  }
}
@media only screen and (max-width: 600px) {
  .main_container {
    padding: 40px 15px;
  }
  .cookies {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .cookies_message {
    text-align: center;
    width: 95%;
  }
  .cookies_button {
    width: 95%;
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 450px) {
  .top_image {
    width: 50px !important;
  }
  .slideIn {
    right: 60px !important;
  }
}
</style>
