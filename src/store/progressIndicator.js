export default ({
    state: {
        progress: 0,

    },
    mutations: {
        setProgress(state, payload) {
            state.progress = payload

        }
    },
    actions: {
    },

    getters: {
        progress: state => state.progress
    }
})
