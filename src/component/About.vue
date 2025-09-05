<script setup lang="ts">

</script>

<template>
  <v-container class="mt-16" align="center" justify="center">
    <h1>
      <b> About me </b>
    </h1>
    <v-divider class="ma-4 w"></v-divider>
    <v-row no-gutters class="w-auto">
      <v-col order="first" align="right" justify="right">
        <p class="mt-16 description">
          I'm a Java Developer with solid experience in banking risk technologies.
          I have worked with tools such as Camunda 7/8 and WingsAI, and have hands-on
          experience integrating Spring-based services with decision and risk engines.
          I’m always open to contributing my skills to build reliable and efficient solutions.
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