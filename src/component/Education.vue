<script setup lang="ts">

</script>

<template>
  <v-container class="mt-16" align="center" justify="center">
    <h1>
      Education
    </h1>
    <v-divider class="ma-4 w"></v-divider>
    <v-row no-gutters align="center" justify="center">
      <v-card class="w" rounded variant="flat" link>
        <v-row no-gutters class="pa-6 ma-6">
          <v-col class="text-left"
                 xs="10"
                 sm="10"
                 md="4"
                 lg="3"
                 xl="3"
                 xxl="3"
                 justify="center">
            <h2>
              Hight School №2
            </h2>
            <u class="text-grey-lighten-1">
              <v-icon icon="mdi-map-marker" size="20"></v-icon>
              Chinaz, Uzbekistan
            </u>
            <p class="text-orange-accent-1">
              Sep 2012 - Jun 2023
            </p>
          </v-col>
          <v-col>
            <p class="text-center">
              In 9th grade teacher teach us to Python development and since this time I started learning programming and creating Minecraft mods.
              I liked to solve problems in physics and mathematics, as well as studying history.
              In 11th grade I decided to devote myself entirely to Java development.
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
              Java programming.
              This course helped me more in learning frameworks like Spring Boot, JavaFX and gave me the concept of MySQL database.
              I completed the course before anyone else, as I already knew the basics and was able to pass the final project and receive a certificate of successful completion of the course.
            </p>
          </v-col>
          <v-col class="text-right"
                 xs="10"
                 sm="10"
                 md="4"
                 lg="3"
                 xl="3"
                 xxl="3"
                 justify="center">
            <h2>
              BePro IT Academy
            </h2>
            <u class="text-grey-lighten-1">
              <v-icon icon="mdi-map-marker" size="20"></v-icon>
              Tashkent, Uzbekistan
            </u>
            <p class="text-orange-accent-1">
              Oct 2022 - Feb 2023
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <v-row no-gutters class="mt-8" align="center" justify="center">
      <v-card class="w" rounded variant="flat" link>
        <v-row no-gutters class="pa-6 ma-6">
          <v-col class="text-left"
                 xs="10"
                 sm="10"
                 md="4"
                 lg="3"
                 xl="3"
                 xxl="3"
                 justify="center">
            <h2>
              Innopolis University
            </h2>
            <u class="text-grey-lighten-1">
              <v-icon icon="mdi-map-marker" size="20"></v-icon>
              Innopolis, Russia
            </u>
            <p class="text-orange-accent-1">
              Aug 2023 - Dec 2024
            </p>
          </v-col>
          <v-col align="right">
            <p class="text-center">
              Uncompleted Bachelor Degree of Computer Science and Engineering. I got uncompleted higher education, with a focus on the fundamentals of
              computer science, including algorithms and data structures, as well as the architecture of computing devices.
              In addition, I have gained valuable experience in project management and team leadership through my involvement in various projects.
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
    font-size: 17px;
  }
}

</style>
