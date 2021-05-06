import Vue from "vue";

export default async function({ $axios, route, redirect }) {

  const code = route.query.code;
  const walk = route.params.walk;
  let authenticated = true;

  if (!route.query.code || !route.params.walk) {
    authenticated = false;
  }

  if (authenticated) {
    await $axios
      .post(process.env.LARAVEL_API_BASE_URL + "api/checkUniekeCode", {
        code: code,
        walk: walk
      })
      .then(response => {
        if (response.data[1] === "success") {
          authenticated = true;
        }
      })
      .catch(() => {
        authenticated = false;
      });
  }

  if (!authenticated) {
    Vue.swal.fire({
      icon: "error",
      title: "Oeps...",
      text:
        "Het kan zijn dat je code verlopen is. Als je denkt dat dit niet klopt, neem dan contact met ons op."
    });
    return redirect(401, "/");
  }
  
}
