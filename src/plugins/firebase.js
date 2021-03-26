// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-analytics.js"></script>
import { firebase } from "@firebase/app"
import '@firebase/auth'
import '@firebase/firestore'
import "@firebase/analytics"

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDjC4XeY71EC-GKnRjMxdgiUx9gEhBck0Q",
    authDomain: "dinnerwalks-7fc99.firebaseapp.com",
    projectId: "dinnerwalks-7fc99",
    storageBucket: "dinnerwalks-7fc99.appspot.com",
    messagingSenderId: "544059530833",
    appId: "1:544059530833:web:469927f89ecdb6e2d9e270",
    measurementId: "G-9PMVBRBWD5"
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    // firebase.analytics()
}
// firebase.firestore().settings({ timestampsInSnapshots: true })

export const db = firebase.firestore()
export const auth = firebase.auth()
// export const storage = firebase.storage()

// export default (context) => {
//     const { store } = context

//     return new Promise((resolve, reject) => {
//         try {
//             auth.onAuthStateChanged((user) => {
//                 resolve(store.dispatch('auth/fetchUser', user))
//             })
//         } catch (error) {
//             reject(error)
//         }
//     })
// }