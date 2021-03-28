<template>
    <nav class="navbar" :class="{ change_navbar: scrollPosition > 50 }">
        <div class="navbar__list">
            <div class="navbar__list__container">
                <h2
                    class="navbar__title"
                    :class="{ title_color: scrollPosition > 50 }"
                >
                    Dinnerwalks
                </h2>
                <img
                    class="navbar__list--logo"
                    :src="logoSrc"
                    @click="goToHome()"
                    alt="Dinnerwalks Logo"
                    :class="{ smaller_logo: scrollPosition > 50 }"
                />
            </div>

            <div class="navbar__list__container navbar__links">
                <NuxtLink
                    :class="{ text_color: scrollPosition > 50 }"
                    class="navbar__list--item"
                    to="/"
                    >Home</NuxtLink
                >
                <NuxtLink
                    :class="{ text_color: scrollPosition > 50 }"
                    class="navbar__list--item"
                    to="/walks"
                    >Walks</NuxtLink
                >
                <NuxtLink
                    :class="{ text_color: scrollPosition > 50 }"
                    class="navbar__list--item"
                    to="/horeca"
                    >Horeca</NuxtLink
                >
                <NuxtLink
                    :class="{ text_color: scrollPosition > 50 }"
                    class="navbar__list--item"
                    to="/contact"
                    >Contact</NuxtLink
                >
            </div>
            <div class="navbar__list__container navbar__button">
                <a
                    :href="'/login'"
                    v-on:click.prevent="goToLogin()"
                    class="cta"
                >
                    <span :class="{ text_color: scrollPosition > 50 }"
                        >Mijn walks</span
                    >
                    <svg
                        width="13px"
                        height="10px"
                        viewBox="0 0 13 10"
                        :class="{ stroke_color: scrollPosition > 50 }"
                    >
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </a>
            </div>

            <div class="navbar__list__container hamburger">
                <div id="hamburger-icon" v-on:click="toggleMobileMenu()">
                    <span
                        :class="{ white_hamburger: scrollPosition > 50 }"
                    ></span>
                    <span
                        :class="{ white_hamburger: scrollPosition > 50 }"
                    ></span>
                    <span
                        :class="{ white_hamburger: scrollPosition > 50 }"
                    ></span>
                </div>
            </div>
        </div>
        <ul
            class="topnav"
            id="myTopnav"
            :class="{
                text_color: scrollPosition > 50,
                backgroundColor: scrollPosition > 50,
            }"
        >
            <li>
                <a
                    :class="{ text_color: scrollPosition > 50 }"
                    class="navbar__list--item"
                    v-on:click="goToPage('/')"
                    >Home</a
                >
            </li>
            <li>
                <a
                    :class="{ text_color: scrollPosition > 50 }"
                    class="navbar__list--item"
                    v-on:click="goToPage('/walks')"
                    >Walks</a
                >
            </li>
            <li>
                <a
                    :class="{ text_color: scrollPosition > 50 }"
                    class="navbar__list--item"
                    v-on:click="goToPage('/horeca')"
                    >Horeca</a
                >
            </li>
            <li>
                <a
                    :class="{ text_color: scrollPosition > 50 }"
                    class="navbar__list--item"
                    v-on:click="goToPage('/contact')"
                    >Contact</a
                >
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            scrollPosition: null,
        };
    },
    computed: {
        logoSrc: function () {
            if (this.scrollPosition > 50) {
                return require("@/assets/images/logo_white.png");
            } else {
                return require("@/assets/images/logo_transparent.png");
            }
        },
    },
    watch: {
        $route() {
            this.$scrollTo("body", 600);
        },
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
        toggleMobileMenu() {
            const body = document.querySelector("html");
            if (body.style.overflow === "hidden") {
                body.style.overflow = "";
            } else {
                body.style.overflow = "hidden";
            }
            document.getElementById("hamburger-icon").classList.toggle("open");
            document.querySelector(".navbar").classList.toggle("navbarpadding");
            document.getElementById("myTopnav").classList.toggle("visible");
            document.getElementById("myTopnav").classList.toggle("responsive");
        },
        goToPage(page) {
            this.toggleMobileMenu();
            this.$router.push(page);
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
};
</script>

<style scoped>
/* Navigation */
.topnav {
    overflow: hidden;
    background-color: #ffb496;
    display: none;
    margin-top: 25px;
}
.topnav a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}
.topnav .icon {
    display: none;
}
.navbar {
    padding: 30px 0px;
    background: #fff;
    min-height: 50px;
    height: auto;
    position: fixed;
    transition: 0.6s;
    top: 0;
    width: 100%;
    z-index: 99;
    overflow: hidden;
}
.navbar__title {
    color: #ffb496;
    font-family: "DK Whale Song";
    font-size: 30px;
    display: none;
    margin: 0;
}
.navbar__list {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
}
.navbar__list--logo {
    width: 80px;
    transition: 0.6s;
    cursor: pointer;
    transition: 1.3s all ease;
}
.navbar__list--logo:hover {
    transform: rotate(360deg);
}
.navbar__list__container {
    display: inline;
    z-index: 0;
    flex: 1;
}
.navbar__list--item {
    font-size: 20px;
    color: #8c8c8c;
    font-weight: bold;
    margin: 10px;
    text-decoration: none;
    cursor: pointer;
    z-index: 2;
    transition: 0.6s all ease;
    padding: 5px 10px;
    border-radius: 20px;
}
.navbar__list--item:hover {
    color: #ffb496;
}
.icon {
    display: none;
}

/* Hamburger menu mobiel */
.hamburger {
    display: none;
}
#hamburger-icon {
    width: 30px;
    height: 22.5px;
    position: relative;
    margin: 0 auto;
    margin-right: 30px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}
#hamburger-icon span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: #ffb496;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
}
#hamburger-icon span:nth-child(1) {
    top: 0px;
}
#hamburger-icon span:nth-child(2) {
    top: 9px;
}
#hamburger-icon span:nth-child(3) {
    top: 18px;
}
#hamburger-icon.open span:nth-child(1) {
    top: 9px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}
#hamburger-icon.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
}
#hamburger-icon.open span:nth-child(3) {
    top: 9px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}

/* Dynamisch */
.change_navbar {
    background-color: #f4d2f3;
    padding: 20px 0px;
}
.smaller_logo {
    width: 60px;
}
a.nuxt-link-exact-active {
    color: #ffb496;
    box-shadow: 0px 0px 0px 3px #ffb496;
    transition: box-shadow 0.6s linear;
    margin: 0.5em;
}
a.nuxt-link-exact-active.text_color {
    box-shadow: 0px 0px 0px 3px #fff;
}
.text_color {
    color: white !important;
}
.text_color:hover {
    color: #ffb496;
}
.cta.text_color:hover {
    color: white !important;
}
.title_color {
    color: white;
}
.change_button {
    color: white;
    font-size: 18px;
    background: none;
    border: 1px solid white;
    padding: 10px 18px;
}
.white_hamburger {
    background: white !important;
}
.visible {
    display: block;
}
.scroll {
    overflow: hidden;
}
.backgroundColor {
    background-color: #f4d2f3;
}
.navbarpadding {
    padding-bottom: 0;
    transition: 0s;
}
.active {
    color: #ffb496 !important;
    box-shadow: 0px 0px 0px 3px #ffb496;
    transition: box-shadow 0.6s linear;
    margin: 0.5em;
}

/* Wandelingen bekijken button */
a {
    text-decoration: none;
    color: inherit;
}
.cta {
    position: relative;
    margin: auto;
    padding: 19px 22px;
    transition: all 0.2s ease;
    /* please red de knop */
    display: none;
}
.cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    background: #ffb496;
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
}
.cta span {
    position: relative;
    line-height: 20px;
    font-size: 20px;
    color: #8c8c8c;
    font-weight: bold;
    transition: all 0.6s ease;
}
.cta svg {
    position: relative;
    top: -2px;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #8c8c8c;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.6s ease;
}
.stroke_color {
    stroke: white !important;
}
.cta:hover:before {
    width: 100%;
    background: #ffd5a3;
}
.cta:hover svg {
    transform: translateX(0);
    stroke: white;
}
.cta:hover span {
    color: white;
}
.cta:active {
    transform: scale(0.96);
}

/* Responsive */
@media screen and (max-width: 800px) {
    .navbar__button {
        display: none;
    }
    .hamburger {
        display: inline;
    }
    .navbar__title {
        display: block;
        text-align: left;
        margin-left: 10%;
    }
    .navbar__links {
        display: none;
    }
    .navbar__list--logo {
        display: none;
    }
    .icon {
        color: #ffb496;
        display: block;
        text-decoration: none;
        float: right;
        margin-right: 10%;
    }

    .topnav a:not(:first-child),
    .dropdown .dropbtn {
        display: none;
    }
    .topnav a.icon {
        float: right;
        display: block;
    }
    .topnav.responsive {
        position: relative;
    }
    .topnav.responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
    }
    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }
    .topnav.responsive .dropdown {
        float: none;
    }
    .topnav.responsive .dropdown-content {
        position: relative;
    }
    .topnav.responsive .dropdown .dropbtn {
        display: block;
        width: 100%;
        text-align: left;
    }
}
</style>
