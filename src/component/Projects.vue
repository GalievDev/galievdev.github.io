<script lang="ts">
import { defineComponent } from "vue";
import projects from "../data/projects.json"

export default defineComponent({
  setup() {
      return projects
  },
})
</script>

<template>
  <v-container class="mt-16" align="center">
    <h1>
      Projects
    </h1>
    <v-divider class="mt-4 w"></v-divider>
    <v-row no-gutters class="w">
      <v-col
          xs="15"
          sm="15"
          md="12"
          lg="6"
          xl="4"
          xxl="4"
          v-for="(project, name) in projects"
          :key="name">
        <v-card class="text-left mt-4" max-width="350">

          <v-img class="align-end" height="200" width="350" cover :src="project.image">
          </v-img>

          <v-card-text class="mt-2">
            <h2 class="mb-2">
              {{ project.name }}
            </h2>
            <v-chip color="orange" v-for="tag in project.tags" class="mb-2">
              {{ tag }}
            </v-chip>
            <p>
              {{ project.description }}
            </p>
          </v-card-text>

          <v-container align="start">
            <v-btn :href="project.repo" target="_blank" variant="text" color="orange">Repository</v-btn>
            <v-btn :href="project.link" target="_blank" variant="text" color="orange">View</v-btn>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h1 {
  color: #ffad2e;
  font-weight: 100
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
}
</style>