<template>
    <section class="walks">
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
        </div>
        <div class="header mb-100">
            <h1 class="header--title">Walks</h1>
            <p class="header--sub">
                Kies een walk uit onderstaande lijst en ga zaterdag of zondag
                gezellig met iemand op pad
            </p>
        </div>
        <div class="locatie">
            <div class="flex_container">
                <div
                    v-for="walk in walks"
                    v-bind:key="walk.id"
                    class="locatie_wandeling"
                >
                    <NuxtLink
                        :to="{ name: 'Checkout', params: { walk: walk } }"
                    >
                        <img
                            class="locatie--image"
                            src="@/assets/images/locaties/noordwijk.png"
                            alt="Noordwijk foto"
                        />
                        <h2 class="locatie--title">
                            <span style="text-transform: capitalize">{{
                                walk.locatie
                            }}</span>
                            walk - €3,50
                        </h2>
                        <p class="locatie--sub">
                            {{ walk.beschrijving }}
                        </p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "walks",
    data() {
        return {
            walks: null,
        };
    },
    created() {
        this.getWalks();
    },
    methods: {
        getWalks() {
            axios
                .get("https://admin.dinnerwalks.nl/api/walks")
                .then((response) => {
                    this.walks = response.data;
                });
        },
    },
};
</script>

<style scoped>
.flex_container {
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.locatie_wandeling {
    flex-grow: 1;
    background-color: #fff2e0;
    padding: 50px;
    box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
    margin: 40px 20px;
    max-width: 400px;
    width: 100%;
    transition: 0.6s all ease;
}
.locatie_wandeling:hover {
    transform: scale(1.1);
}
.locatie_wandeling h2,
.locatie_wandeling a {
    text-decoration: none;
}
.locatie--image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}
.locatie--title {
    color: #f59dcc;
    font-weight: 700;
    font-size: 34px;
    margin-bottom: 20px;
}
.locatie--sub {
    color: black;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 10px;
}

@media screen and (max-width: 800px) {
    .locatie_wandeling {
        margin: 40px 0;
    }
    .locatie--image {
        width: 50%;
    }
}
</style>
