<script setup lang="ts">

import About from "./component/About.vue";
import Education from "./component/Education.vue";
import Experience from "./component/Experience.vue";
import Skills from "./component/Skills.vue";
import { useTheme } from 'vuetify'
import Projects from "./component/Projects.vue";
import Contacts from "./component/Contacts.vue";

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app>
    <v-layout>
      <v-main class="rounded-xl opacity-90">
        <v-container class="position-absolute" align="right">
          <v-btn position="absolute" icon="mdi-weather-night" @click="toggleTheme"></v-btn>
        </v-container>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contacts />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>

</style>
