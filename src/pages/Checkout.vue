<template>
    <section class="checkout">
        <h1 class="checkout--title header--title">
            Bevestig je boeking en betaal
        </h1>
        <p class="checkout--sub header--sub">
            Bekijk hieronder je boeking en bevestig de gegevens. Zodra de
            betaling voltooid is, krijg je een e-mail met de boekingsgegevens en
            een link naar de desbetreffende wandeling.
        </p>
        <div class="flex_container">
            <div class="flex_container--item boekingsgegevens">
                <h3 class="boekingsgegevens--title">Boekingsgegevens</h3>
                <div class="boekingsgegevens_field">
                    <select name="locatie" id="locatie">
                        <option value="null">Kies een locatie</option>
                        <option value="Noordwijk">Noordwijk</option>
                        <option value="Katwijk">Katwijk</option>
                    </select>
                    <label for="locatie">Locatie</label>
                </div>
                <div class="boekingsgegevens_field">
                    <select
                        name="peopleCount"
                        id="peopleCount"
                        v-model="peopleCount"
                    >
                        <option value="null">Kies het aantal personen</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <label for="peopleCount">Aantal personen</label>
                </div>
                <div class="boekingsgegevens_field">
                    <DatePicker
                        mode="dateTime"
                        type="date"
                        name="date"
                        id="date"
                        placeholder="20 Maart 2021 om 12:30"
                        :timezone="timezone"
                        :minute-increment="5"
                        is24hr
                        locale="nl"
                    >
                        <template v-slot="{ inputValue, inputEvents }">
                            <input :value="inputValue" v-on="inputEvents" />
                        </template>
                    </DatePicker>
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
                <h3 class="boekingskosten--title">Deze boeking kost</h3>
                <div class="boekingskosten_prijs">
                    <p class="boekingskosten_prijs--teken">&euro;</p>
                    <p class="boekingskosten_prijs--amount">{{ getPrice }}</p>
                    <p class="boekingskosten_prijs--after">.00</p>
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
            <button class="checkout_buttons--betalen">Betalen</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "Checkout",
    asyncData() {
        return {
            peopleCount: null,
            price: 0,
            timezone: "",
        };
    },
    methods: {
        goToWalks() {
            this.$router.push("/walks");
        },
    },
    computed: {
        getPrice: function () {
            if (this.peopleCount == 1) {
                return 3;
            } else if (this.peopleCount == 2) {
                return 6;
            }
            return 0;
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
}
.checkout--sub {
    max-width: 700px;
    width: 100%;
}
.flex_container--item {
    flex: 1 1 auto;
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
select {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    resize: none;
    padding: 10px 5px;
    border: 1px solid rgba(0, 0, 0, 0.185);
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
</style>
