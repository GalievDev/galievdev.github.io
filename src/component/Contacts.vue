<script setup lang="ts">

</script>

<template>
  <v-container class="mt-16" align="center">
    <h1>
      Contacts
    </h1>
    <v-divider class="ma-4 w-50"></v-divider>
    <v-row no-gutters class="w-50" align="center" justify="center">
      <v-container>
        <h2>
          I am open to job offers and also to short-term projects (freelance).
        </h2>

        <v-row no-gutters class="mt-10" align="center" justify="center">
          <v-col cols="3">
            <v-btn size="large" prepend-icon="mdi-telegram" rounded href="https://t.me/vgaliev4" target="_blank">
              Telegram
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn size="large" prepend-icon="mdi-linkedin" rounded href="https://www.linkedin.com/in/vazir-vadirov-462364261/" target="_blank">
              LinkedIn
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn size="large" prepend-icon="mdi-instagram" rounded href="https://www.instagram.com/galiev.dev/" target="_blank">
              Instagram
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<style scoped>
h1 {
  color: #ffad2e;
  font-weight: 100
}

h2 {
  font-weight: 100;
}
</style>