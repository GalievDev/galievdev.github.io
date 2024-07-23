<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    first_skills: {
      Java: 90,
      Git: 85,
      "Rest APIs": 83,
      "Minecraft (Forge & Fabric) ": 80,
      Kotlin: 45,
      "Linux (Arch and Ubuntu)": 40,
    },
    second_skills: {
      SQL: 40,
      "JS/TS": 40,
      Python: 34,
      "C++": 34,
      "CI/CD Pipelines": 25,
      Android: 20,
    }
  })
})
</script>

<template>
  <v-container class="mt-16" align="center" justify="center">
    <h1>
      Skills
    </h1>
    <v-divider class="ma-2 w-50"></v-divider>
    <v-row no-gutters class="w-50" align="center" justify="center">
      <v-col cols="5" justify="center">
        <v-card v-for="(_, name) in first_skills" :key="name" variant="text" class="mt-2 w-50" link>
          <v-row align="center" no-gutters>
            <v-col cols="10" align="left" justify="center">
              <p>
                {{ name }}
              </p>
            </v-col>
            <v-col cols="10" align="right" justify="center">
              <v-progress-linear color="orange" height="15" v-model="first_skills[name]">
              </v-progress-linear>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="5" justify="center">
        <v-card v-for="(_, name) in second_skills" :key="name" variant="text" class="mt-2 w-50" link>
          <v-row align="center" no-gutters>
            <v-col cols="10" align="left" justify="center">
              <p>
                {{ name }}
              </p>
            </v-col>
            <v-col cols="10" align="left" justify="center">
              <v-progress-linear color="orange" height="15" v-model="second_skills[name]">
              </v-progress-linear>
            </v-col>
          </v-row>
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
</style>