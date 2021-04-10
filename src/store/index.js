export const state = () => ({
    receivedtoken: null
})

export const mutations = {

    setToken(state, { token }) {
        state.receivedtoken = token;
    },

    removeToken(state) {
        state.receivedtoken = null;
    }
}