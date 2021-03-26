const functions = require("firebase-functions");
const { Nuxt } = require("nuxt-start");

const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');

const nuxtConfig = require("./nuxt.config.js");

// Setup nodemailer
const mailTransport = nodemailer.createTransport({
    host: "smtp.strato.com",
    port: 465,
    secure: true,
    auth: {
        user: 'info@dinnerwalks.nl',
        pass: 'VeerleenMerlijn123abc',
    },
});

// Setup app
const config = {
    ...nuxtConfig,
    dev: false,
    debug: false,
    buildDir: ".nuxt",
    publicPath: "public"
};

const nuxt = new Nuxt(config);

let isReady = false;

async function handleRequest(req, res) {
    if (!isReady) {
        try {
            isReady = await nuxt.ready();
        } catch (error) {
            process.exit(1);
        }
    }
    await nuxt.render(req, res);
}

exports.ssrapp = functions.https.onRequest(handleRequest);

// Send contactform
exports.sendEmailCF = functions.https.onRequest((req, res) => {
    const mailOptions = {
        from: `website@dinnerwalks.nl`,
        to: `info@dinnerwalks.nl`
    };

    // in case you get CORS errors you need these 2 lines of code
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', 'true');

    cors(req, res, () => {
        mailOptions.subject = 'Contactformulier Bericht';
        mailOptions.html = `
        <p>Email: ${req.body.email}</p>
        <p>Naam: ${req.body.naam}</p>
        <p>Bericht: ${req.body.bericht}</p>
        `;
        return mailTransport.sendMail(mailOptions)
            .then(() => {
                return res.status(200).json({ success: true })
            })
            .catch((e) => {
                return res.status(400).json({ err: e });
            })
    });
});