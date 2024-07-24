import {createApp} from "vue";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

let theme: string;

const hours = new Date().getHours()

if (hours >= 18 || hours < 6) {
    theme = 'dark'
} else {
    theme = 'light'
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
}

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
          mdi
      }
    },
    theme: {
        defaultTheme: theme,
    }
})

createApp(App).use(vuetify).mount('#app')
