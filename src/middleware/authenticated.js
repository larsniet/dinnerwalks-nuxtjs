import axios from 'axios'

export default function ({ route, redirect, context, app }) {

  if (!route.query.code) {
    redirect(401, "/NotAuthorized");
  }

  axios
    .post(process.env.LARAVEL_API_BASE_URL + "api/checkUniekeCode", {
      code: route.query.code,
      walk: route.params.walk
    })
    .then(() => { })
    .catch(() => {
      app.swal.fire({
        icon: "error",
        title: "Oeps...",
        text:
          "Het kan zijn dat je code verlopen is. Als je denkt dat dit niet klopt, neem dan contact met ons op."
      });
      redirect('https://vuejs.org')

    });

}
