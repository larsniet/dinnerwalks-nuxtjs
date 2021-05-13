import Vue from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'

// For more options see below
Vue.use(VueReCaptcha, {
    siteKey: '6LeSXYsaAAAAAOqxUiYPJid5oyiKA7O_BcxaCqi9',
    loaderOptions: {
        autoHideBadge: true
    }
});