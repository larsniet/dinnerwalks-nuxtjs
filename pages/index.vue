<template>
  <div>
    <section class="banner">
      <div class="banner__container">
        <img
          class="banner--img1 banner--img"
          src="@/assets/images/walklocal_blue.png"
          alt="Image"
        />
        <img
          class="banner--img2 banner--img"
          src="@/assets/images/walklocal_yellow.png"
          alt="Image"
        />
        <img
          class="banner--img3 banner--img"
          src="@/assets/images/walklocal_purple.png"
          alt="Image"
        />
      </div>
      <div class="banner__container middle">
        <h1 class="banner--title">Walk local, eat local</h1>

        <p class="banner--sub">
          Beweeg, geniet en support jouw lokale horeca
        </p>

        <button @click="goToCheckout()" class="banner--button">
          Boeken!
        </button>

        <div class="banner__checks">
          <div class="banner__checks--item">
            <svg
              class="w-6 h-6 icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <p class="banner_checks--text">Route</p>
          </div>
          <div class="banner__checks--item">
            <svg
              class="w-6 h-6 icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <p class="banner_checks--text">Kortingscode</p>
          </div>
          <div class="banner__checks--item">
            <svg
              class="w-6 h-6 icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <p class="banner_checks--text">Podcast</p>
          </div>
        </div>
      </div>
      <div class="banner__container">
        <img
          class="banner--img4 banner--img"
          src="@/assets/images/walklocal_blue.png"
          alt="Image"
        />
        <img
          class="banner--img5 banner--img"
          src="@/assets/images/walklocal_yellow.png"
          alt="Image"
        />
      </div>
    </section>
    <section class="content">
      <div class="flex_container mb-50">
        <div class="flex_container--image">
          <img
            class="content--img"
            src="@/assets/images/mobile.png"
            alt="Image"
          />
        </div>
        <div class="flex_container--text">
          <h2 class="content--title">
            Lekkere culinaire wandelingen
          </h2>
          <p class="content--sub">
            Elke dag van de week lekkere culinaire wandelingen door de regio! Voor maar 3,50 wandel je al mee, ontvang je jouw unieke code en toegang tot onze speciale podcast. In de podcast nemen wij je aan de hand en leiden je door de stad en zijn historie. Elke dinsdag en donderdag organiseren wij ook speciale cocktail-wandelingen!
          </p>
        </div>
      </div>
      <div class="flex_container flex_reversed mb-50">
        <img
          class="floating--img1"
          src="@/assets/images/walklocal_blue.png"
          alt="Image"
        />
        <img
          class="floating--img2"
          src="@/assets/images/walklocal_yellow.png"
          alt="Image"
        />
        <div class="flex_container--text">
          <h2 class="content--title">Helemaal coronaproof</h2>
          <p class="content--sub">
            In verband met de maatregelen van het RIVM kun je onze wandeling met maximaal 4 personen lopen. Ben je met meer uit hetzelfde huishouden? Geen probleem. Boek meerdere wandelingen en start tegelijk!
          </p>
        </div>
        <div class="flex_container--image">
          <img
            class="content--img"
            src="@/assets/images/covid.png"
            alt="Image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  methods: {
    goToCheckout() {
      this.$router.push("/checkout");
    }
  },
  created() {
    if (this.$route.query.betaald == "success") {
      this.$swal.fire({
        icon: "success",
        title: "Boeking voltooid!",
        text:
          "Via de mail krijg je alle informatie over je boeking toegestuurd."
      });
    } else if (this.$route.query.betaald == "failure") {
      this.$swal.fire({
        icon: "error",
        title: "Betaling afgebroken!",
        text: "Probeer het nogmaals of neem contact met ons op."
      });
    }
    this.$router.push(this.$route.path);
  }
};
</script>

<style scoped>
/* Algemeen */
.mb-50 {
  margin-bottom: 50px;
}

/* Banner */
.banner {
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.banner__container {
  display: inline-block;
  position: relative;
  flex: 1 1 0;
}
.banner__container.middle {
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.banner--title {
  color: #373737;
  font-size: 40px;
  font-weight: bolder;
  line-height: 45px;
}
.banner--sub {
  margin-top: 30px;
  color: #373737;
  font-size: 20px;
  font-weight: 500;
}
.banner--button {
  margin-top: 30px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  background-color: #ffb496;
  padding: 20px 30px;
  border: 3px solid #ffb496;
  border-radius: 20px;
  transition: 0.6s all ease;
}
.banner--button:hover {
  background-color: transparent !important;
  color: #ffb496;
  cursor: pointer;
}
.banner__checks {
  margin-top: 30px;
}
.banner__checks--item {
  display: inline-block;
  margin: 0 20px;
}
.banner_checks--text {
  display: inline-block;
  color: #888888;
}
.icon {
  color: #888888;
  display: inline-flex;
  align-self: center;
  width: 20px;
  height: 20px;
  top: 0.25em;
  position: relative;
}
.banner--img1 {
  position: absolute;
  top: 320px;
  left: 10%;
  width: 90px;
  z-index: 3;
  opacity: 0.85;
}
.banner--img2 {
  position: absolute;
  top: 50px;
  left: 1%;
  width: 150px;
  z-index: 1;
  opacity: 0.85;
}
.banner--img3 {
  position: absolute;
  left: -30%;
  top: 50px;
  z-index: 2;
  opacity: 0.85;
}
.banner--img4 {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  opacity: 0.85;
}
.banner--img5 {
  position: absolute;
  right: 15%;
  bottom: 50%;
  width: 60px;
  opacity: 0.85;
}

/* Content */
.content {
  margin-top: 100px;
  text-align: left;
  position: relative;
}
.flex_container {
  align-items: center;
  justify-content: center;
}
.flex_container--image {
  width: 50%;
}
.flex_container--text {
  overflow: hidden;
  min-height: 170px;
  margin: 10px auto;
  width: 100%;
  max-width: 500px;
}
.content--img {
  max-width: 100%;
  max-height: inherit;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.content--title {
  color: #373737;
  font-size: 32px;
  font-weight: bold;
}
.content--sub {
  margin-top: 30px;
  color: #373737;
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
}
.floating--img1 {
  position: absolute;
  left: 0;
  top: 400px;
  z-index: 2;
  opacity: 0.85;
}
.floating--img2 {
  position: absolute;
  right: 20px;
  bottom: 0;
  z-index: 2;
  opacity: 0.85;
}

@media only screen and (max-width: 1200px) {
  .flex_container--text {
    padding: 80px 0;
  }
  .banner__container.middle {
    width: 60%;
  }
}
@media only screen and (max-width: 1100px) {
  .banner--img1 {
    width: 70px;
  }
  .banner--img2 {
    width: 70px;
    left: 5%;
  }
  .banner--img3 {
    width: 340px;
  }
  .banner--img4 {
    right: 0;
  }
  .banner--img5 {
    right: 10%;
  }
  .floating--img1 {
    left: -100px;
  }
  .floating--img2 {
    right: -100px;
  }
}
@media only screen and (max-width: 1000px) {
  .content--title {
    width: 100%;
  }
  .content--sub {
    width: 100%;
  }
  .flex_container--text {
    padding: 40px 0;
  }
  .floating--img1 {
    left: -100px;
    width: 100px;
  }
  .floating--img2 {
    right: -150px;
    bottom: -100px;
  }
}
@media only screen and (max-width: 900px) {
  .content {
    margin-top: 150px;
  }
  .banner--img1 {
    width: 50px;
  }
  .banner--img2 {
    width: 50px;
    left: 0;
  }
  .banner--img3 {
    width: 200px;
    left: -20%;
  }
  .banner--img4 {
    right: -20px;
    width: 50px;
  }
  .banner--img5 {
    right: 0%;
    bottom: 70px;
  }
}
@media only screen and (max-width: 800px) {
  .flex_container--text {
    max-width: 100%;
  }
  .floating--img1 {
    left: -100px;
    top: 100px;
    width: 140px;
  }
}
@media only screen and (max-width: 700px) {
  .banner--img2 {
    display: none;
  }
  .banner--img3 {
    width: 100px;
  }
  .banner__container.middle {
    width: auto;
  }
}
@media only screen and (max-width: 600px) {
  .flex_container--text {
    padding: 0px 0px !important;
    width: 100%;
    margin-top: 100px;
  }
  .flex_container--image {
    margin-right: 0;
    width: auto;
  }
  .floating--img1 {
    left: -100px;
    top: 160px;
    width: 140px;
  }
  .floating--img2 {
    right: -50px;
    bottom: -150px;
  }
}
@media only screen and (max-width: 500px) {
  .banner--button {
    padding: 10px 20px;
    font-size: 20px;
  }
  .banner--img1 {
    display: none;
  }
  .banner--img2 {
    display: none;
  }
  .banner--img3 {
    top: 380px;
    left: -10%;
  }
  .banner--img4 {
    display: none;
  }
  .banner--img5 {
    display: none;
  }
}
</style>
