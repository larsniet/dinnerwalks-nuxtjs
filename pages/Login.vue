<template>
    <section id="login" class="login">
        <div class="header">
            <img class="login--img" src="@/assets/images/login.png" alt="" />
        </div>
        <div :class="{ 'signup-form': !showLoginForm }" class="col2">
            <form v-if="showLoginForm" @submit.prevent>
                <div>
                    <label for="email1">Name</label>
                    <input
                        v-model.trim="loginForm.name"
                        type="text"
                        placeholder="you@email.com"
                        id="email1"
                    />
                </div>
                <div>
                    <label for="password1">Email</label>
                    <input v-model.trim="loginForm.password" id="password1" />
                </div>
                <DatePicker
                    mode="dateTime"
                    :timezone="null"
                    is24hr
                    v-model="loginForm.date"
                />
            </form>
        </div>
        <button @click="submit">Submit</button>
    </section>
</template>

<script>
import axios from "axios";

export default {
    asyncData() {
        return {
            sessionId: "",
            loginForm: {
                name: "LarsTest",
                email: "larsvanderniet@gmail.com",
                date: null,
            },
            signupForm: {
                name: "",
                title: "",
                email: "",
            },
            showLoginForm: true,
            showPasswordReset: false,
        };
    },
    methods: {
        toggleForm() {
            this.showLoginForm = !this.showLoginForm;
        },
        togglePasswordReset() {
            this.showPasswordReset = !this.showPasswordReset;
        },
        login() {
            this.$store.dispatch("login", {
                email: this.loginForm.email,
                password: this.loginForm.password,
            });
        },
        signup() {
            this.$store.dispatch("signup", {
                email: this.signupForm.email,
                name: this.signupForm.name,
                title: this.signupForm.title,
            });
        },

        submit() {
            this.$store.dispatch("paymentSuccesfull", {
                name: this.loginForm.name,
                email: this.loginForm.email,
                date: this.loginForm.date,
            });
        },
    },
    created() {
        axios
            .post(
                "https://us-central1-dinnerwalks-7fc99.cloudfunctions.net/CheckoutSession"
            )
            .then((response) => {
                this.sessionId = response.data;
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style scoped>
.main_container {
    padding: 0px !important;
}
.header {
    margin-top: 0;
}
.login--img {
    width: 100%;
    max-width: 150px;
    height: auto;
}
</style>
