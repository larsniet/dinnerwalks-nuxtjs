export default function ({ route, redirect }) {
    if (
        route.params.walk == "noordwijk" ||
        route.params.walk == "katwijk"
    ) {
        return;
    } else {
        redirect(404);
    }
}