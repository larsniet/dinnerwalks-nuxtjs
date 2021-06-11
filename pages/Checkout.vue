<template>
  <div>
    <Loader v-if="loading" />
    <div class="checkoutBolletjes">
      <img
        class="checkoutBolletjes--img1"
        src="@/assets/images/walklocal_blue.png"
        alt="Image"
      />
      <img
        class="checkoutBolletjes--img5"
        src="@/assets/images/walklocal_blue.png"
        alt="Image"
      />
      <img
        class="checkoutBolletjes--img2"
        src="@/assets/images/walklocal_yellow.png"
        alt="Image"
      />
    </div>
    <section class="checkout">
      <h1 class="checkout--title header--title">Bevestig je boeking</h1>
      <p class="checkout--sub header--sub">
        Bekijk hieronder je boeking en bevestig de gegevens. Zodra de betaling
        voltooid is, krijg je een e-mail met de boekingsgegevens en een link
        naar de desbetreffende wandeling.
      </p>
      <div class="flex_container">
        <div class="flex_container--item boekingsgegevens">
          <h3 class="boekingsgegevens--title">Boekingsgegevens</h3>
          <div class="boekingsgegevens_field">
            <p class="form_error" v-if="errors.chosenWalk">
              Locatie niet ingevuld!
            </p>
            <select
              name="chosenWalk"
              id="chosenWalk"
              @change="resetErrors"
              v-model="formData.chosenWalk"
              v-bind:class="{
                'form_error--border': errors.chosenWalk
              }"
            >
              <option selected disabled value="null">
                Kies een locatie
              </option>
              <option
                v-bind:value="walk.id"
                v-for="walk in walks"
                :key="walk.id"
              >
                {{ walk.locatie.replace(/^./, walk.locatie[0].toUpperCase()) }}
              </option>
            </select>
            <label for="chosenWalk">Locatie</label>
          </div>
          <div class="boekingsgegevens_field">
            <p class="form_error" v-if="errors.personenCount">
              Aantal personen niet ingevuld!
            </p>
            <select
              name="personenCount"
              id="personenCount"
              @change="resetErrors"
              v-model="formData.personenCount"
              v-bind:class="{
                'form_error--border': errors.personenCount
              }"
            >
              <option selected disabled value="null">
                Kies aantal personen
              </option>
              <option
                v-bind:value="index"
                v-for="index in getMaxPeople"
                :key="index"
              >
                {{ index }}
              </option>
            </select>
            <label for="personenCount">Aantal personen</label>
          </div>

          <div class="boekingsgegevens_field">
            <client-only>
              <date-picker
                value="null"
                color="pink"
                locale="nl"
                v-model="formData.datum"
                @input="resetErrors"
                id="datum"
                name="datum"
                mode="date"
                :model-config="modelConfig"
                :min-date="new Date()"
                :max-date="maxDate"
              >
                <template v-slot="{ inputValue, inputEvents }">
                  <p class="form_error" v-if="errors.datum">
                    Datum niet ingevuld!
                  </p>
                  <input
                    v-model="inputValue"
                    v-on="inputEvents"
                    placeholder="10-10-2010"
                    v-bind:class="{
                      'form_error--border': errors.datum
                    }"
                  />
                  <label for="datum">Datum van de walk</label>
                </template>
              </date-picker>
            </client-only>
          </div>
          <div class="boekingsgegevens_field">
            <p class="form_error" v-if="errors.naam">Naam niet ingevuld!</p>
            <input
              type="text"
              name="naam"
              id="naam"
              @input="resetErrors"
              placeholder="Uw naam"
              v-model="formData.naam"
              v-bind:class="{
                'form_error--border': errors.naam
              }"
            />
            <label for="naam">Volledige naam</label>
          </div>
          <div class="boekingsgegevens_field">
            <p class="form_error" v-if="errors.email">
              E-mail niet ingevuld!
            </p>
            <input
              v-model="formData.email"
              v-bind:class="{
                'form_error--border': errors.email
              }"
              @input="resetErrors"
              type="email"
              name="email"
              id="email"
              placeholder="email@voorbeeld.nl"
            />
            <label for="email">E-mailadres</label>
          </div>
          <div class="boekingsgegevens_field">
            <p class="form_error" v-if="errors.telefoonnummer">
              {{ errors.telefoonnummer }}
            </p>
            <input
              type="tel"
              name="phone"
              id="telefoonnummer"
              placeholder="0612345678"
              @input="resetErrors"
              v-model="formData.telefoonnummer"
              v-bind:class="{
                'form_error--border': errors.telefoonnummer
              }"
            />
            <label for="phone">Telefoonnummer</label>
          </div>
        </div>
        <div class="flex_container--item boekingskosten">
          <h3 class="boekingskosten--title">Totaalbedrag</h3>
          <div class="boekingskosten_prijs">
            <p class="boekingskosten_prijs--teken">&euro;</p>
            <p class="boekingskosten_prijs--amount">
              {{ getPrice }}
            </p>
            <p class="boekingskosten_prijs--after">.{{ pricePart }}</p>
          </div>
          <p class="boekingskosten--sub">
            Het is niet mogelijk om dit bedrag terug te krijgen. Wandelen kan
            namelijk altijd!
          </p>
          <p class="boekingskosten_extra">
            De betaling vindt plaats op de volgende pagina, betalen kan met
            iDEAL, Apple Pay en Creditcard
          </p>
        </div>
      </div>
      <div class="checkout_buttons">
        <a
          :href="'/walks'"
          v-on:click.prevent="goToWalks()"
          class="checkout_buttons--return"
          >Terug naar walks</a
        >
        <client-only>
          <button @click="checkout" class="checkout_buttons--betalen">
            Naar betalen
          </button>
        </client-only>
      </div>
    </section>
    <div class="checkoutBolletjesBottom">
      <img
        class="checkoutBolletjes--img4"
        src="@/assets/images/walklocal_blue.png"
        alt="Image"
      />
      <img
        class="checkoutBolletjes--img6"
        src="@/assets/images/walklocal_yellow.png"
        alt="Image"
      />
      <img
        class="checkoutBolletjes--img3"
        src="@/assets/images/walklocal_purple.png"
        alt="Image"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader";

export default {
  name: "checkout",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,

      walks: null,
      maxDate: new Date(),
      maxPeople: 0,

      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD"
      },

      inputValue: null,
      formData: {
        chosenWalk: null,
        personenCount: null,
        datum: null,
        price: null,
        naam: "",
        email: "",
        telefoonnummer: ""
      },

      errors: {
        datum: "",
        chosenWalk: "",
        personenCount: "",
        naam: "",
        email: "",
        telefoonnummer: ""
      },

      priceWhole: "0",
      pricePart: "00"
    };
  },
  methods: {
    goToWalks() {
      this.$router.push("/walks");
    },
    getWalks() {
      axios
        .get(process.env.LARAVEL_API_BASE_URL + "api/walks")
        .then(response => {
          this.walks = response.data;
          this.maxDate = response.data[0].max_boekings_datum;
          this.maxPeople = response.data[0].max_aantal_personen;

          if (this.$route.params.chosenWalk) {
            let walk = this.$route.params.chosenWalk;
            this.formData.chosenWalk = this.walks[walk.id - 1].id;
          }
        });
    },
    async checkout() {
      if (!this.validForm()) {
        return;
      }

      this.loading = true;
      this.recaptcha();

      await axios
        .post(
          process.env.LARAVEL_API_BASE_URL + "api/customer/create-session",
          {
            naam: this.formData.naam,
            telefoonnummer: this.formData.telefoonnummer,
            email: this.formData.email,
            walkId: this.formData.chosenWalk,
            aantalPersonen: this.formData.personenCount,
            prijs: this.formData.price,
            datum: this.formData.datum
          }
        )
        .then(response => {
          if (!response.data.id) {
            this.loading = false;
            return this.$swal.fire({
              icon: "error",
              title: "Whoops",
              text:
                "Er gaat aan onze kant iets fout... Probeer contact op te nemen of probeer het later opnieuw."
            });
          }

          this.$stripe.redirectToCheckout({ sessionId: response.data.id });
          this.loading = false;
        })
        .catch(err => {
          const errors = err.response.data.errors;
          console.log(errors);

          for (const input in this.formData) {
            for (const error in errors) {
              if (error === input) {
                this.errors[input] = errors[input][0];
              }
            }
          }
          this.loading = false;
        });
    },
    resetErrors: function(event) {
      if (this.isDate(event)) {
        return (this.errors.datum = null);
      }

      const target = event.target.id;
      this.errors[target] = null;
    },
    isDate: function(date) {
      return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
    },
    resetForm: function() {
      this.formData = {
        naam: "",
        email: "",
        telefoonnummer: "",
        datum: "",
        chosenWalk: "",
        personenCount: ""
      };
    },
    validForm: function() {
      let noErrors = true;

      for (const input in this.formData) {
        if (!this.formData[input]) {
          this.errors[input] =
            input.replace(/^./, input[0].toUpperCase()) + " niet ingevuld!";
          noErrors = false;
        }
      }

      if (!this.validEmail(this.formData.email) && this.errors.email == "") {
        this.errors.email = "Je e-mail is niet geldig!";
        noErrors = false;
      }

      return noErrors;
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async recaptcha() {
      await this.$recaptchaLoaded();
    }
  },
  computed: {
    getMaxPeople: function() {
      let maxPeople = 0;
      if (this.formData.chosenWalk) {
        for (let i = 0; i < this.walks.length; i++) {
          if (this.walks[i].id === this.formData.chosenWalk) {
            maxPeople = this.walks[i].max_aantal_personen;
          }
        }
      }
      return (this.maxPeople = maxPeople);
    },
    getPrice: function() {
      if (this.formData.chosenWalk) {
        if (this.formData.personenCount) {
          for (let i = 0; i < this.walks.length; i++) {
            if (this.walks[i].id === this.formData.chosenWalk) {
              let priceWhole = (
                this.walks[i].prijs * this.formData.personenCount
              ).toString();

              this.formData.price = priceWhole;

              if (priceWhole.includes(".")) {
                this.priceWhole = priceWhole.split(".")[0];
                this.pricePart = priceWhole.split(".")[1];
                if (this.pricePart.length === 1) {
                  this.pricePart += "0";
                }
              } else {
                this.priceWhole = priceWhole;
                this.pricePart = "00";
              }
            }
          }
        }
      }
      return this.priceWhole;
    }
  },
  async mounted() {
    await this.getWalks();
  }
};
</script>

<style scoped>
/* Checkout */
.checkout {
  margin-top: 30px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 49px 6px rgba(0, 0, 0, 0.25);
  text-align: left;
  padding: 100px 90px;
  margin-right: 200px;
  position: relative;
  z-index: 1;
}
.checkout--sub {
  max-width: 700px;
  width: 100%;
}
.flex_container--item {
  flex: 1 1 auto;
}

/* Bolletjes */
.checkoutBolletjes {
  position: relative;
  z-index: 2;
}
.checkoutBolletjesBottom {
  z-index: 0;
  position: relative;
}
.checkoutBolletjes--img1 {
  position: absolute;
  width: 250px;
  height: auto;
  right: 0px;
  top: 50px;
}
.checkoutBolletjes--img2 {
  position: absolute;
  width: 150px;
  height: auto;
  right: -100px;
  top: 350px;
}
.checkoutBolletjes--img3 {
  position: absolute;
  width: 400px;
  height: auto;
  right: -50px;
  bottom: -150px;
  z-index: 0;
}
.checkoutBolletjes--img4 {
  position: absolute;
  width: 200px;
  height: auto;
  right: 100px;
  bottom: 500px;
}
.checkoutBolletjes--img5 {
  position: absolute;
  width: 200px;
  height: auto;
  left: 40%;
  top: 1150px;
}
.checkoutBolletjes--img6 {
  position: absolute;
  width: 200px;
  height: auto;
  left: -150px;
  bottom: -100px;
}

/* Boekingsgegevens (linker veld) */
.boekingsgegevens {
  padding: 50px;
  box-shadow: 18px 15px 23px -13px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: white;
  margin-top: 50px;
  max-width: 570px;
  width: 100%;
}
.boekingsgegevens--title {
  font-weight: 600;
  color: black;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 23px;
  margin-left: 10px;
}
.boekingsgegevens_field {
  display: flex;
  flex-flow: column-reverse;
  transition: 1s all ease;
  position: relative;
  margin-bottom: 10px;
}
span {
  display: flex;
  flex-flow: column-reverse;
}
label {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-left: 10px;
  letter-spacing: 0.05em;
  color: #b7b7b7;
  z-index: 0;
}
label,
input {
  transition: all 0.2s;
  touch-action: manipulation;
  background: none;
}
input,
textarea,
select,
option {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  resize: none;
  padding: 10px 5px;
  border: 2px solid rgba(0, 0, 0, 0.185);
  border-radius: 20px;
  margin-bottom: 10px;
  padding-left: 20px;
  width: auto;
  color: black;
  font-size: 22px;
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 1;
  background: none;
}
input:focus,
textarea:focus,
select:focus {
  border: 2px solid #ffb496;
}
select option:not(:first-child) {
  text-transform: capitalize !important;
}
.form_error {
  color: red;
  position: absolute;
  right: 0;
  bottom: -12px;
}
.form_error--border {
  transition: none;
  border: 2px solid red;
}
input:placeholder-shown + label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0.5rem, 3rem) scale(1.1);
}
::placeholder {
  color: rgba(0, 0, 0, 0.274);
}
:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.274);
}
::-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.274);
}
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
input:focus::-webkit-input-placeholder {
  opacity: 1;
}
input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}

/* Boekingskosten (rechter veld) */
.boekingskosten {
  padding: 50px;
  background-color: #ffb496;
  border-radius: 20px;
  box-shadow: 18px 15px 23px -13px rgba(0, 0, 0, 0.1);
  color: white;
  height: 100%;
  margin-top: 50px;
  margin-left: 30px;
  width: 500px;
}
.boekingskosten--title {
  font-weight: 600;
  font-size: 22px;
  padding-bottom: 10px;
}
.boekingskosten_prijs {
  padding: 10px 0;
  position: relative;
}
.boekingskosten_prijs--teken {
  display: inline-block;
  color: #ffede5;
  font-weight: 700;
  font-size: 20px;
  top: 10px;
  left: -15px;
  position: absolute;
}
.boekingskosten_prijs--amount {
  display: inline-block;
  font-size: 46px;
  font-weight: 700;
}
.boekingskosten_prijs--after {
  display: inline-block;
  color: #ffede5;
  font-weight: 700;
}
.boekingskosten--sub {
  color: rgba(255, 255, 255, 0.7);
  padding: 10px 0;
}
.boekingskosten_extra {
  background-color: #ffccb8;
  color: white;
  margin-top: 10px;
  padding: 20px;
}

/* Checkout buttons */
.checkout_buttons {
  margin: 50px 0;
  position: relative;
  width: 100%;
}
.checkout_buttons--return {
  color: #b7b7b7;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  transition: 0.6s all ease;
  padding: 20px 30px;
  border: 3px solid transparent;
  border-radius: 20px;
}
.checkout_buttons--return:hover {
  border: 3px solid #ffb496;
  padding: 20px 30px;
  color: #ffb496;
  box-shadow: 18px 15px 23px -13px rgba(0, 0, 0, 0.1);
}
.checkout_buttons--betalen {
  margin: 0;
  position: absolute;
  top: 50%;
  right: 0;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #ffb496;
  padding: 20px 30px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  border: 3px solid #ffb496;
  transition: 0.6s all ease;
  box-shadow: 18px 15px 23px -13px rgba(0, 0, 0, 0.1);
}
.checkout_buttons--betalen:hover {
  background-color: transparent !important;
  color: #ffb496;
  cursor: pointer;
}

/* Animaties */
.draai-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.draai-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.draai-enter,
.draai-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

/* Responsive */
@media screen and (max-width: 1300px) {
  .checkout {
    margin-right: 100px;
  }
  .checkoutBolletjes--img1 {
    width: 150px;
    right: -150px;
  }
}
@media screen and (max-width: 1300px) {
  .checkoutBolletjes--img5 {
    display: none;
  }
}
@media screen and (max-width: 1100px) {
  .flex_container {
    width: 100%;
  }
  .main_container {
    padding: 0;
  }
  .checkout {
    margin: 0 auto;
    margin-top: 30px;
  }
  .flex_container {
    flex-direction: column;
  }
  .boekingsgegevens {
    width: auto;
  }
  .boekingskosten {
    margin: 0 auto;
    margin-top: 50px;
    width: auto;
  }
}
@media screen and (max-width: 800px) {
  .checkout {
    padding: 50px 45px;
  }
  .checkout_buttons--betalen {
    padding: 10px 20px;
    font-size: 16px;
  }
  .checkout_buttons--return {
    font-size: 16px;
    padding: 5px 10px;
  }
  .boekingsgegevens_field input,
  .boekingsgegevens_field option,
  .boekingsgegevens_field select,
  .boekingsgegevens_field label {
    font-size: 17px;
  }
  input:placeholder-shown + label {
    transform: translate(0.5rem, 2.6rem) scale(1.1);
  }
  .checkoutBolletjes--img3 {
    width: 150px;
    bottom: -50px;
  }
}
@media screen and (max-width: 500px) {
  .checkout {
    padding: 40px 30px;
  }
  .boekingsgegevens {
    padding: 20px 20px;
  }
  .boekingsgegevens--title {
    letter-spacing: inherit;
    margin: 20px 5px;
    text-transform: none;
  }
}
</style>
