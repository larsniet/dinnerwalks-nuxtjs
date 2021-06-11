<template>
    <div class="main_container">
        <Nuxt />
    </div>
</template>

<style scoped>
@font-face {
    font-family: "DK Whale Song";
    src: local("DK Whale Song"),
        url(~/assets/fonts/DK_Whale_Song.otf) format("truetype");
}
.main_container {
    padding: 40px 100px;
    background-color: white;
    height: 100%;
    z-index: 1;
    margin: 0 !important;
}
@media only screen and (max-width: 900px) {
    .main_container {
        padding: 40px 60px;
    }
}
@media only screen and (max-width: 600px) {
    .main_container {
        padding: 40px 15px;
    }
}
</style>