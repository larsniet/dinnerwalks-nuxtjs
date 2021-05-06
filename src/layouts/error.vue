<template>
  <main class="main_container">
    <div class="error">
      <h1 v-if="error.statusCode === 404">Deze pagina is niet gevonden</h1>
      <h1 v-else-if="error.statusCode === 401">
        Je hebt geen toegang tot deze pagina
      </h1>
      <h1 v-else>Er is een fout opgetreden</h1>
      <NuxtLink to="/"
        ><a class="return_button">Terug naar de Homepage</a></NuxtLink
      >
    </div>
  </main>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>

<style scoped>
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

.main_container {
  padding: 40px 100px;
  background-color: white;
  height: 100%;
  margin: 100px 0;
  z-index: 1;
}
.return_button {
  color: #b7b7b7;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  transition: 0.6s all ease;
  padding: 20px 30px;
  border: 3px solid transparent;
  border-radius: 20px;
  margin: 30px;
}
</style>
