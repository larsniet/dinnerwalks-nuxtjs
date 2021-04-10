import axios from 'axios'

export default async function ({ store, redirect }) {

    // If the user is not authenticated
    if (!store.state.receivedtoken) {
        await axios.get('https://admin.dinnerwalks.nl/sanctum/csrf-cookie').then((response) => {
            // store.commit('setToken', response.data.getToken());
            // console.log('====================================');
            // console.log(response.headers);
            // console.log('====================================');
            // axios.defaults.headers.common['X-CSRF-TOKEN'] = "null";

        });
    }
}

