import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#0B0C10',
                secondary: '#1F2833',
                accent: '#C5C6C7',
                accent2: '#c99835',
                text: '#ffc964',
                error: '#2d2109',
            },
        },
    },
});
