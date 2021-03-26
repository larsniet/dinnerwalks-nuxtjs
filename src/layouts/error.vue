<template>
    <main class="main_container">
        <div class="error">
            <h1 v-if="error.statusCode === 404">Page not found</h1>
            <h1 v-else>An error occurred</h1>
            <NuxtLink to="/">Home page</NuxtLink>
        </div>
    </main>
</template>

<script>
export default {
    props: ["error"],
    layout: "error", // you can set a custom layout for the error page
};
</script>

<style scoped>
.main_container {
    padding: 40px 100px;
    background-color: white;
    height: 100%;
    margin: 100px 0;
    z-index: 1;
}
</style>