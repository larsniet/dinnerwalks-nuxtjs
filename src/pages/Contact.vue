<template>
  <div>
    <Loader v-if="sending" />
    <section class="contact">
      <div class="bolletjes">
        <img
          class="bolletjes--img1"
          src="@/assets/images/walklocal_blue.png"
          alt="Image"
        />
        <img
          class="bolletjes--img2"
          src="@/assets/images/walklocal_yellow.png"
          alt="Image"
        />
        <img
          class="bolletjes--img3"
          src="@/assets/images/walklocal_purple.png"
          alt="Image"
        />
        <img
          class="bolletjes--img4"
          src="@/assets/images/walklocal_blue.png"
          alt="Image"
        />
      </div>
      <div class="header mb-100">
        <h1 class="header--title">Neem contact op</h1>
        <p class="header--sub">
          Voor vragen die betrekking hebben op samenwerking, betalingen en
          overige vragen vul onderstaand contactformulier in
        </p>
      </div>
      <div class="contactformulier flex_container mb-100">
        <div class="contactformulier_info">
          <h2 class="contactformulier_info--title">Contactformulier</h2>
          <p class="contactformulier_info--sub">
            Mocht u vragen hebben die niet beantwoord zijn bij de vaak gestelde
            vragen of neemt u contact op in verband met eventuele
            samenwerkingen, vul dan het contactformulier in.
          </p>
          <p class="contactformulier_info--sub">
            Het duurt gemiddeld 1 dag voordat u antwoord krijgt via de mail.
          </p>
          <p class="contactformulier_info--sub">
            Voor directer contact zijn wij natuurlijk ook bereikbaar via sociale
            media!
          </p>
          <div class="socials">
            <a href="https://www.instagram.com/dinnerwalks/" target="_blank">
              <svg
                class="icon"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM18.7233 11.2773C20.0886 11.2152 20.5249 11.2 24.0012 11.2H23.9972C27.4746 11.2 27.9092 11.2152 29.2746 11.2773C30.6373 11.3397 31.5679 11.5555 32.384 11.872C33.2266 12.1987 33.9386 12.636 34.6506 13.348C35.3627 14.0595 35.8 14.7736 36.128 15.6155C36.4427 16.4294 36.6587 17.3595 36.7227 18.7222C36.784 20.0876 36.8 20.5238 36.8 24.0001C36.8 27.4764 36.784 27.9116 36.7227 29.277C36.6587 30.6391 36.4427 31.5695 36.128 32.3837C35.8 33.2253 35.3627 33.9394 34.6506 34.6509C33.9394 35.3629 33.2264 35.8013 32.3848 36.1283C31.5703 36.4448 30.6391 36.6605 29.2765 36.7229C27.9111 36.7851 27.4762 36.8003 23.9996 36.8003C20.5236 36.8003 20.0876 36.7851 18.7222 36.7229C17.3598 36.6605 16.4294 36.4448 15.615 36.1283C14.7736 35.8013 14.0595 35.3629 13.3483 34.6509C12.6365 33.9394 12.1992 33.2253 11.872 32.3834C11.5557 31.5695 11.34 30.6394 11.2773 29.2767C11.2155 27.9114 11.2 27.4764 11.2 24.0001C11.2 20.5238 11.216 20.0873 11.2771 18.7219C11.3384 17.3598 11.5544 16.4294 11.8717 15.6152C12.1997 14.7736 12.6371 14.0595 13.3491 13.348C14.0606 12.6363 14.7747 12.1989 15.6166 11.872C16.4305 11.5555 17.3606 11.3397 18.7233 11.2773Z"
                  fill="#ffb496"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.853 13.5067C23.0759 13.5064 23.3158 13.5065 23.5746 13.5066L24.0013 13.5067C27.4189 13.5067 27.824 13.519 29.1736 13.5803C30.4216 13.6374 31.0989 13.8459 31.5501 14.0211C32.1475 14.2531 32.5733 14.5305 33.0211 14.9785C33.4691 15.4265 33.7464 15.8532 33.979 16.4505C34.1542 16.9012 34.363 17.5785 34.4198 18.8265C34.4811 20.1759 34.4944 20.5812 34.4944 23.9972C34.4944 27.4133 34.4811 27.8186 34.4198 29.168C34.3627 30.416 34.1542 31.0933 33.979 31.544C33.747 32.1413 33.4691 32.5667 33.0211 33.0144C32.5731 33.4624 32.1477 33.7398 31.5501 33.9718C31.0995 34.1478 30.4216 34.3558 29.1736 34.4128C27.8242 34.4742 27.4189 34.4875 24.0013 34.4875C20.5834 34.4875 20.1783 34.4742 18.8289 34.4128C17.5809 34.3552 16.9036 34.1467 16.4521 33.9715C15.8548 33.7395 15.4281 33.4621 14.9801 33.0141C14.5321 32.5661 14.2548 32.1405 14.0222 31.5429C13.847 31.0923 13.6382 30.4149 13.5814 29.1669C13.5201 27.8176 13.5078 27.4122 13.5078 23.994C13.5078 20.5759 13.5201 20.1727 13.5814 18.8233C13.6385 17.5753 13.847 16.898 14.0222 16.4468C14.2542 15.8494 14.5321 15.4228 14.9801 14.9748C15.4281 14.5268 15.8548 14.2494 16.4521 14.0169C16.9033 13.8409 17.5809 13.6329 18.8289 13.5755C20.0097 13.5222 20.4674 13.5062 22.853 13.5035V13.5067ZM30.8339 15.6321C29.9859 15.6321 29.2978 16.3193 29.2978 17.1676C29.2978 18.0156 29.9859 18.7036 30.8339 18.7036C31.6819 18.7036 32.3699 18.0156 32.3699 17.1676C32.3699 16.3196 31.6819 15.6316 30.8339 15.6316V15.6321ZM17.4279 24.0002C17.4279 20.3701 20.3709 17.4269 24.001 17.4268C27.6312 17.4268 30.5736 20.37 30.5736 24.0002C30.5736 27.6304 27.6314 30.5723 24.0013 30.5723C20.3711 30.5723 17.4279 27.6304 17.4279 24.0002Z"
                  fill="#ffb496"
                />
                <path
                  d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6447 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6447 19.7334 24.0012 19.7334Z"
                  fill="#ffb496"
                />
              </svg>
            </a>

            <a href="https://www.facebook.com/DINNERWALKS/" target="_blank">
              <svg
                class="icon"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM26.5016 25.0542V38.1115H21.0991V25.0547H18.4V20.5551H21.0991V17.8536C21.0991 14.1828 22.6231 12 26.9532 12H30.5581V16.5001H28.3048C26.6192 16.5001 26.5077 17.1289 26.5077 18.3025L26.5016 20.5546H30.5836L30.1059 25.0542H26.5016Z"
                  fill="#ffb496"
                />
              </svg>
            </a>
          </div>
        </div>
        <form
          class="contactformulier_form"
          v-on:submit.prevent="sendMail"
          novalidate
        >
          <div class="form_field">
            <p class="form_error" v-if="errors.naam">
              {{ errors.naam }}
            </p>
            <input
              type="text"
              v-model="contactFormData.naam"
              id="naam"
              name="naam"
              placeholder="Vul uw naam in"
              v-bind:class="{ 'form_error--border': errors.naam }"
              @click="resetErrors"
            />
            <label for="naam">Volledige naam</label>
          </div>
          <div class="form_field">
            <p class="form_error" v-if="errors.email">
              {{ errors.email }}
            </p>
            <input
              type="email"
              v-model="contactFormData.email"
              id="email"
              name="email"
              placeholder="Vul uw e-mailadres in"
              v-bind:class="{
                'form_error--border': errors.email
              }"
              @click="resetErrors"
            />
            <label for="email">E-mailadres</label>
          </div>
          <div class="form_field">
            <p class="form_error" v-if="errors.bericht">
              {{ errors.bericht }}
            </p>
            <textarea
              type="text"
              v-model="contactFormData.bericht"
              id="bericht"
              name="bericht"
              placeholder="Vul hier uw bericht/vraag in"
              v-bind:class="{
                'form_error--border': errors.bericht
              }"
              @click="resetErrors"
            />
            <label for="bericht">Bericht</label>
          </div>
          <button class="form_submit" type="submit" :disabled="sending">
            Versturen
          </button>
        </form>
      </div>

      <div class="faq mb-100">
        <h1 class="faq--title">Vaak gestelde vragen</h1>
        <div class="faq_container flex_container">
          <div class="faq_container--links">
            <div class="faq_vraag">
              <h2>Wat zijn de kosten van de loop?</h2>
              <p>
                Dinnerwalks is een initiatief om de lokale horeca te steunen in
                deze moeilijke tijd. We proberen de kosten dan ook zo laag
                mogelijk te houden. We vragen u een eenmalige bijdrage van 3
                euro voor de deelname, maar de kosten voor de gerechtjes bepalen
                de horecazaken zelf en betaalt u dus ook ter plekke. U bent
                uiteraard niet verplicht om bij elke zaak een gerechtje af te
                nemen.
              </p>
            </div>
            <div class="faq_vraag">
              <h2>Hoe moet ik betalen voor de wandeling?</h2>
              <p>
                U maakt een reservering via het reserveringssysteem op onze
                website. Na u reservering ontvangt u een e-mail met daarin een
                betaalverzoek. Op het moment dat u dit betaalverzoek heeft
                betaald ontvangt u een betalingsbevestiging per mail (kan ook in
                spam terecht komen). Dit kan even duren. Betaalt u niet binnen
                48 uur dan komt de reservering te vervallen.
              </p>
            </div>
            <div class="faq_vraag">
              <h2>Hoe ontvang ik alle informatie over de wandeling?</h2>
              <p>
                Wanneer u betaald heeft ontvangt u een dag voor de route van de
                wandeling, een link de podcast en uw unieke code. Met deze code
                ontvangt u bij de deelnemende horeca een gerechtje tegen een
                gereduceerde prijs.
              </p>
            </div>
          </div>
          <div class="faq_container--rechts">
            <div class="faq_vraag">
              <h2>Hoe wordt er rekening gehouden met de corona maatregelen?</h2>
              <p>
                Op dit moment mogen mensen van de overheid met maximaal 2
                personen buiten zijn. Om die reden is ons maximum ingesteld op 2
                personen per tijdslot. Ben u met meer personen van 1 huishouden,
                dan kan u meerdere tijdsloten achter elkaar reserveren. Zijn
                deze vol? Dan zijn wij helaas genoodzaakt u op een ander moment
                de wandeling te laten wandelen. Tijdens het afhalen van de
                gerechten verzoeken wij u vriendelijk een mondkapje te dragen.
                Ook vragen wij u niet bij de horecazaken te blijven hangen, maar
                met u gerechtjes door te wandelen. Wij zijn ons bewust van de
                gevaren van Corona en houden hier dan ook voldoende rekening
                mee. Wilt u meer informatie? Kijk dan op: rijksoverheid.nl
              </p>
            </div>
            <div class="faq_vraag">
              <h2>Wanneer vinden de wandelingen plaats?</h2>
              <p>
                Onze wandelingen zijn elke zaterdag en zondag van 11:30 tot
                17:30 en duren ongeveer 2 tot 2,5 uur. De wandeling begint en
                eindigt bij de vuurtoren in Noordwijk en gaat via het strand en
                de koningin Astrid Boulevard naar de Grent om uiteindelijk via
                de Hoofdstraat weer op de koningin Wilhelmina boulevard uit te
                komen.
              </p>
            </div>
            <div class="faq_vraag">
              <h2>Wat zijn onze voorwaarden?</h2>
              <p>
                Wij kunnen het inschrijfgeld van 3 euro helaas niet teruggeven,
                omdat het onder elke weersomstandheid mogelijk is om de route te
                wandelen. Tenzij de wereld wordt veroverd door aliëns, dat is
                een ander verhaal. De code die u ontvangt is eenmalig en
                persoonsgebonden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import axios from "axios";

export default {
  name: "Contact",
  head: {
    title: "Contact",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Heb je vragen of wil je graag jouw horecaonderneming aanmelden bij ons? Vul dan het contactformulier op onze website in."
      }
    ]
  },
  components: {
    Loader
  },
  asyncData() {
    return {
      contactFormData: {
        naam: null,
        email: null,
        bericht: null
      },
      sending: false,
      errors: {
        naam: "",
        email: "",
        bericht: ""
      }
    };
  },
  methods: {
    resetErrors: function(event) {
      const target = event.target.id;
      this.errors[target] = "";
    },
    sendMail: function() {
      if (!this.validForm()) {
        return;
      }

      this.sending = true;
      this.recaptcha();

      axios
        .post(process.env.LARAVEL_API_BASE_URL + "api/contactForm", {
          naam: this.contactFormData.naam,
          email: this.contactFormData.email,
          bericht: this.contactFormData.bericht
        })
        .then(() => {
          this.$swal.fire({
            icon: "success",
            title: "Woehoe!",
            text:
              "Je bericht is verstuurd, we zullen zo spoedig mogelijk reageren."
          });
          this.resetForm();
          this.sending = false;
        })
        .catch(() => {
          this.$swal.fire({
            icon: "error",
            title: "Oeps...",
            text:
              "Er is iets mis gegaan! Probeer het contactformulier nogmaals te versturen, de pagina te verversen of stuur ons een berichtje via sociale media :)"
          });
          this.sending = false;
        });
    },
    resetForm: function() {
      this.contactFormData = {
        naam: "",
        email: "",
        bericht: ""
      };
    },
    validForm: function() {
      let noErrors = true;
      for (const input in this.contactFormData) {
        if (!this.contactFormData[input]) {
          this.errors[input] = "Je hebt je " + input + " niet ingevuld!";
          noErrors = false;
        }
      }
      if (
        !this.validEmail(this.contactFormData.email) &&
        this.errors.email == ""
      ) {
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
  }
};
</script>

<style scoped>
/* Contactformulier */
.contactformulier {
  display: flex;
  width: 100%;
  height: auto;
  -webkit-box-shadow: 0px 4px 23px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 23px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 23px -1px rgba(0, 0, 0, 0.75);
  transition: 1s all ease;
  text-align: left;
}
.contactformulier_info {
  padding: 50px;
  text-align: start;
  flex: 1;
}
.contactformulier_info--title {
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
}
.contactformulier_info--sub {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
}
.icon {
  width: 50px;
  height: 50px;
  margin: 10px;
  color: #f4d2f3;
  transition: 0.6s all ease;
}
.icon:hover {
  transform: scale(1.2);
}
.contactformulier_form {
  text-align: start;
  padding: 50px;
  box-shadow: 18px 15px 23px -13px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: white;
  max-width: 570px;
  width: 100%;
  transition: 1s all ease;
}
.form_field {
  display: flex;
  flex-flow: column-reverse;
  transition: 1s all ease;
  position: relative;
}
label {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-left: 10px;
  letter-spacing: 0.05em;
  color: #b7b7b7;
  z-index: 0;
  transition: 1s all ease;
}
label,
input,
textarea {
  transition: all 0.2s;
  touch-action: manipulation;
  background: none;
}
input,
textarea,
select {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  resize: none;
  padding: 10px 5px;
  border: 2px solid rgba(0, 0, 0, 0.185);
  border-radius: 20px;
  margin-bottom: 10px;
  padding-left: 20px;
  color: black;
  font-size: 22px;
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 1;
}
input:focus,
textarea:focus,
select:focus {
  border: 2px solid #ffb496;
}
input:placeholder-shown + label,
textarea:placeholder-shown + label {
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
input:focus::-webkit-input-placeholder,
textarea:focus::-webkit-input-placeholder {
  opacity: 1;
}
input:not(:placeholder-shown) + label,
textarea:not(:placeholder-shown) + label,
input:focus + label,
textarea:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
.form_submit {
  width: 100%;
  margin-top: 30px;
  background-color: #ffb496;
  padding: 15px 20px;
  border-radius: 20px;
  font-size: 22px;
  font-weight: 600;
  color: white;
  border: 3px solid #ffb496;
  transition: 0.6s all ease;
  box-shadow: 18px 15px 23px -13px rgba(0, 0, 0, 0.1);
}
.form_submit:hover {
  background-color: transparent !important;
  color: #ffb496;
  cursor: pointer;
}
.form_error {
  color: red;
  position: absolute;
  right: 0;
  bottom: -15px;
}
.form_error--border {
  transition: none;
  border: 2px solid red;
}

/* Vaak gestelde vragen */
.faq {
  margin: 0 auto;
  width: 100%;
}
.faq--title {
  color: #373737;
  font-size: 40px;
  line-height: 45px;
}
.faq_container {
  display: flex;
  width: 100%;
  text-align: left;
}
.faq_container--links {
  text-align: start;
  flex: 1;
}
.faq_container--rechts {
  text-align: start;
  flex: 1;
}
.faq_vraag {
  margin-top: 50px;
  padding: 0 50px;
}
.faq_vraag h2 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}
.faq_vraag p {
  color: #373737;
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
}
@media screen and (max-width: 800px) {
  .contactformulier {
    flex-direction: column;
  }
  .contactformulier_form {
    width: auto;
    padding-top: 0;
  }
}
@media screen and (max-width: 500px) {
  .contactformulier_info {
    padding: 30px;
  }
  .contactformulier_form {
    padding: 30px;
  }
  .faq_vraag {
    padding: 0;
  }
}
</style>
