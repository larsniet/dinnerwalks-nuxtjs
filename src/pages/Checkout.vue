<template>
    <div>
        <div class="checkoutBolletjes">
            <img
                class="checkoutBolletjes--img1"
                src="@/assets/images/walklocal_blue.png"
                alt="Image"
                :v-bind="bollen.bol1"
            />
            <img
                class="checkoutBolletjes--img5"
                src="@/assets/images/walklocal_blue.png"
                alt="Image"
                :v-bind="bollen.bol5"
            />
            <img
                class="checkoutBolletjes--img2"
                src="@/assets/images/walklocal_yellow.png"
                alt="Image"
                :v-bind="bollen.bol2"
            />
        </div>
        <section class="checkout">
            <h1 class="checkout--title header--title">
                Bevestig je boeking en betaal
            </h1>
            <p class="checkout--sub header--sub">
                Bekijk hieronder je boeking en bevestig de gegevens. Zodra de
                betaling voltooid is, krijg je een e-mail met de
                boekingsgegevens en een link naar de desbetreffende wandeling.
            </p>
            <div class="flex_container">
                <div class="flex_container--item boekingsgegevens">
                    <h3 class="boekingsgegevens--title">Boekingsgegevens</h3>
                    <div class="boekingsgegevens_field">
                        <select
                            name="locatie"
                            id="locatie"
                            v-model="chosenWalk"
                        >
                            <option selected disabled value="null">
                                Kies een locatie
                            </option>
                            <option
                                v-bind:value="walk.id"
                                v-for="walk in walks"
                                :key="walk.id"
                            >
                                {{
                                    walk.locatie.replace(
                                        /^./,
                                        walk.locatie[0].toUpperCase()
                                    )
                                }}
                            </option>
                        </select>
                        <label for="locatie">Locatie</label>
                    </div>
                    <div class="boekingsgegevens_field">
                        <select
                            name="personenCount"
                            id="personenCount"
                            v-model="personenCount"
                        >
                            <option selected value="null">
                                Kies aantal personen
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <label for="personenCount">Aantal personen</label>
                    </div>
                    <div class="boekingsgegevens_field">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="email@voorbeeld.nl"
                        />
                        <label for="date">Datum van de wandeling</label>
                    </div>
                    <div class="boekingsgegevens_field">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Uw naam"
                        />
                        <label for="name">Volledige naam</label>
                    </div>
                    <div class="boekingsgegevens_field">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email@voorbeeld.nl"
                        />
                        <label for="email">E-mailadres</label>
                    </div>
                    <div class="boekingsgegevens_field">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="06-1234567"
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
                        <p class="boekingskosten_prijs--after">
                            .{{ pricePart }}
                        </p>
                    </div>
                    <p class="boekingskosten--sub">
                        Het is niet mogelijk om dit bedrag terug te krijgen.
                        Wandelen kan namelijk altijd!
                    </p>
                    <p class="boekingskosten_extra">
                        Betalen kan via credit card, IDEAL, Paypal, Klarna, etc.
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
                    <stripe-checkout
                        ref="checkoutRef"
                        mode="payment"
                        :pk="publishableKey"
                        :line-items="lineItems"
                        :success-url="successURL"
                        :cancel-url="cancelURL"
                        @loading="(v) => (loading = v)"
                    />
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
                :v-bind="bollen.bol4"
            />
            <img
                class="checkoutBolletjes--img6"
                src="@/assets/images/walklocal_yellow.png"
                alt="Image"
                :v-bind="bollen.bol6"
            />
            <img
                class="checkoutBolletjes--img3"
                src="@/assets/images/walklocal_purple.png"
                alt="Image"
                :v-bind="bollen.bol3"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Checkout",
    data() {
        this.publishableKey =
            "pk_live_51ISUAIEK50IisyE6aB8Xyo932L4LKBtRfK9dORaew9D5am9oj6tDimk1po5x9NalSRW9ULinapQ8tQNWOo6KzX1700rhYpkWxC";
        return {
            loading: false,
            lineItems: [
                {
                    price: "price_1IcCUbEK50IisyE6SsNbNrKu",
                    quantity: 1,
                },
            ],
            successURL: "https://beta.dinnerwalks.nl?betaald=success",
            cancelURL: "https://beta.dinnerwalks.nl?betaald=failure",

            walks: null,
            chosenWalk: null,
            personenCount: null,
            priceWhole: "0",
            pricePart: "00",
        };
    },
    created() {
        this.getWalks();
        if (this.$route.params.walk) {
            this.chosenWalk = this.$route.params.walk.id;
        }
    },
    methods: {
        checkout() {
            this.$refs.checkoutRef.redirectToCheckout();
        },
        goToWalks() {
            this.$router.push("/walks");
        },
        getWalks() {
            axios
                .get("https://admin.dinnerwalks.nl/api/walks")
                .then((response) => {
                    this.walks = response.data;
                });
        },
    },
    computed: {
        getPrice: function () {
            if (this.chosenWalk) {
                if (this.personenCount) {
                    for (let i = 0; i < this.walks.length; i++) {
                        if (this.walks[i].locatie === this.chosenWalk) {
                            let priceWhole = this.walks[i].prijs;
                            priceWhole = (
                                priceWhole * this.personenCount
                            ).toString();

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
        },
    },
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
    width: auto;
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
    border: none;
    box-shadow: 18px 15px 23px -13px rgba(0, 0, 0, 0.1);
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
