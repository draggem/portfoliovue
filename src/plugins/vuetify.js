import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#2d2109',
                secondary: '#ffc964',
                accent: '#2d2109',
                error: '#2d2109',
            },
        },
    },
});
