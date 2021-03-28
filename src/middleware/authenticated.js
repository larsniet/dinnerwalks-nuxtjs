export default async function ({ route, redirect, app }) {

    const db = app.$fire.database;

    // Check of de walk waar de gebruiker naartoe wilt bestaat
    if (
        route.params.walk == "noordwijk" ||
        route.params.walk == "katwijk"
    ) {
        // Check of de parameters in de url staan
        if (!route.query.userID || !route.query.uniqueID) {
            return redirect("/NotFound")
        }
    } else {
        // Mocht de gebruiker niet op een bestaande walk zitten, redirect 404
        return redirect("/NotFound")
    }


    // Haal de data van de gebruiker op
    await db.ref().child("users/" + route.query.userID).get().then(function (user) {
        if (user.exists()) {
            return user.val();
        }
        else {
            // Als de gebruiker niet bestaat, opdonderen
            return redirect("/NotFound")
        }
    }).catch(function (error) {
        console.error(error);
    });


    // Haal het id van de boeking op die gekoppeld is aan de gebruiker
    let boeking_id = await db.ref().child("user_inschrijving/" + route.query.userID).once('value').then(function (snapshot) {
        if (snapshot.exists()) {
            const snap = snapshot.val();
            return Object.keys(snap)[0];
        }
        else {
            // Als de code niet gekoppeld is aan de gebruiker, opdonderen
            return redirect("/NotFound")
        }
    }).catch(function (error) {
        console.error(error);
    });


    // Haal de boeking op aan de hand van het opgehaalde boeking id en de huidige walk
    await db.ref().child("boekingen/" + boeking_id).get().then(function (snapshot) {
        if (snapshot.exists()) {

            // Als de kortingscode van de boeking gelijk is aan dat van de url, return de boeking en anders: opdonderen
            const boeking = snapshot.val();
            if (boeking.kortingscode === route.query.uniqueID && boeking.locatie === route.params.walk) {
                return boeking;
            } else {
                return redirect("/NotFound")
            }

        }
        else {
            // Als de code niet gekoppeld is aan de gebruiker, opdonderen
            return redirect("/NotFound")
        }
    }).catch(function (error) {
        console.error(error);
    });

}
