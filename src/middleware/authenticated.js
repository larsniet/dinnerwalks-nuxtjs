import { db } from "../plugins/firebase.js"

export default async function ({ route, redirect }) {

    // Check of de walk waar de gebruiker naartoe wilt bestaat
    if (
        route.params.walk == "noordwijk" ||
        route.params.walk == "katwijk"
    ) {
        // Check of de parameters in de url staan
        if (!route.query.userID || !route.query.uniqueID) {
            redirect(404)
        }
    } else {
        // Mocht de gebruiker niet op een bestaande walk zitten, redirect 404
        redirect(404);
    }


    // Haal de data van de gebruiker op
    let user = await db.ref().child("users").child(route.query.userID).get().then(function (user) {
        if (user.exists()) {
            return user.val();
        }
        else {
            // Als de gebruiker niet bestaat, opdonderen
            return redirect(404)
        }
    }).catch(function (error) {
        console.error(error);
    });


    // Haal het id van de boeking op die gekoppeld is aan de gebruiker
    let boeking_id = await db.ref().child("user_inschrijving").child(route.query.userID).once('value').then(function (snapshot) {
        if (snapshot.exists()) {
            const snap = snapshot.val();
            return Object.keys(snap)[0];
        }
        else {
            // Als de code niet gekoppeld is aan de gebruiker, opdonderen
            return redirect(404);
        }
    }).catch(function (error) {
        console.error(error);
    });


    // Haal de boeking op aan de hand van het opgehaalde boeking id en de huidige walk
    let boeking = await db.ref().child("boekingen").child(boeking_id).get().then(function (snapshot) {
        if (snapshot.exists()) {

            // Als de kortingscode van de boeking gelijk is aan dat van de url, return de boeking en anders: opdonderen
            const boeking = snapshot.val();
            if (boeking.Kortingscode === route.query.uniqueID && boeking.Locatie === route.params.walk) {
                return boeking;
            } else {
                redirect(404)
            }

        }
        else {
            // Als de code niet gekoppeld is aan de gebruiker, opdonderen
            return redirect(404);
        }
    }).catch(function (error) {
        console.error(error);
    });
}
