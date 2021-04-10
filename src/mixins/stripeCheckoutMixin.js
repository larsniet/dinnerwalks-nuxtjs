export default {
    methods: {
        checkout: function (event) {
            this.stripe
                .redirectToCheckout({
                    lineItems: [{ price: this.price, quantity: this.quantity }],
                    // Todo: handle fullfillment
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    mode: "payment",
                    payment_method_types: ['ideal'],

                    successUrl: this.successUrl,
                    cancelUrl: this.cancelUrl
                })
                .then(function (result) {
                    if (result.error) {
                        var displayError = document.getElementById('error-message')
                        displayError.textContent = result.error.message
                    }
                })
        }
    },
    mounted() {
        this.stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY)
    }
}