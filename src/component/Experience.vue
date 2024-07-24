<script setup lang="ts">

</script>

<template>
  <v-container class="mt-16" align="center" justify="center">
    <h1>
      Experience
    </h1>
    <v-divider class="ma-4 w"></v-divider>
    <v-row no-gutters align="center" justify="center">
      <v-card class="w" rounded variant="flat" link>
        <v-row no-gutters class="pa-6 ma-6">
          <v-col class="text-left"
                 xs="10"
                 sm="10"
                 md="4"
                 lg="2"
                 xl="2"
                 xxl="2"
                 justify="center">
            <h2>
              Self-study
            </h2>
            <p class="text-orange-accent-1">
              Aug 2021 - Current
            </p>
          </v-col>
          <v-col>
            <p class="text-center">
              I have been self-taught in Java since the age of 16. At that time, I was able to write my first modification for Minecraft Fabric,
              as well as learn the basics of HTTP, REST APIs and write my first API for a posts system on Spring Boot with a client side in ReactJS.
              I am currently continuing to learn new technologies and Android development.
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <v-row no-gutters class="mt-8" align="center" justify="center">
      <v-card class="w" rounded variant="flat" link>
        <v-row no-gutters class="pa-6 ma-6">
          <v-col>
            <p class="text-center">
              This project was completed at university with a team of six people. I gained valuable experience in managing a team and a project,
              as well as developing in microservice architecture on Ktor and furthering my proficiency in Python using FastAPI.
            </p>
          </v-col>
          <v-col class="text-right"
                 xs="10"
                 sm="10"
                 md="4"
                 lg="2"
                 xl="2"
                 xxl="2"
                 justify="center">
            <h2>
              Team project
            </h2>
            <p class="text-orange-accent-1">
              June 2024 - July 2024
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>
h1 {
  color: #ffad2e;
  font-weight: 100
}

h2 {
  color: #ffad2e;
}

.w {
  width: 50%;
}

@media screen and (max-width: 1920px) {
  .w {
    width: 75%;
  }
}

@media screen and (max-width: 1280px) {
  .w {
    width: 75%;
  }
}

@media screen and (max-width: 960px) {
  .w {
    width: 75%;
  }
}

@media screen and (max-width: 600px) {
  .w {
    width: 75%;
  }
  h2 {
    font-size: 20px;
  }
}
</style>