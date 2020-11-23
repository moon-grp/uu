<template>
  <v-app>
    <v-app-bar color="#FFFFFF" flat>
      <v-container>
        
      </v-container>
      <v-spacer></v-spacer>
      <nuxt-link to="/wish">
        <v-btn rounded color="#6C63FF" dark outlined class="text-capitalize"
          >Make a wish</v-btn
        >
      </nuxt-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #ecf4ff;
}
a{
  text-decoration: none;
}
</style>
