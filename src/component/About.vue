<script setup lang="ts">

</script>

<template>
  <v-container class="mt-16" align="center" justify="center">
    <h1>
      About me
    </h1>
    <v-divider class="ma-4 w"></v-divider>
    <v-row no-gutters class="w-auto">
      <v-col order="first" align="right" justify="right">
        <p class="mt-16 description">
          I'm a 18 years old Full Stack developer, more Backend orientated, with over 3 years of code experience. My main work area is web development, but I also develop mods for Minecraft and simple Android apps.
        </p>
      </v-col>
      <v-col align="center" justify="center"
             sm="7"
             md="4"
             lg="3"
             xl="2"
             xxl="2">
        <v-avatar rounded="4" size="260" class="mt-10 position-relative">
          <v-img src="../image/galiev.jpg" alt="galiev"></v-img>
        </v-avatar>
      </v-col>
      <v-col order="last" align="left" justify="left">
        <p class="mt-16">
          <b class="text">
            Full name:
          </b>
          <p>
            Vazir Vadirov
          </p>
          <b class="text">
            Date of birth:
          </b>
          <p>
            11.12.2005
          </p>
          <b class="text">
            Location:
          </b>
          <p>
            <u>Tashkent, Uzbekistan</u>
          </p>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h1, h2 {
  color: #ffad2e;
  font-weight: 100
}

.text {
  color: #ffad2e;
}

.description {
  width: 25%;
}

.w {
  width: 50%;
}

@media screen and (max-width: 1920px) {
  .description {
    width: 35%;
  }
  .w {
    width: 75%;
  }
}

@media screen and (max-width: 960px) {
  .description {
    width: 100%;
  }
  .w {
    width: 75%;
  }
}

@media screen and (max-width: 600px) {
  .description {
    width: 100%;
    text-align: center;
    align-self: end;
  }
  .w {
    width: 75%;
  }
}

</style>