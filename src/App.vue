<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <router-link to="/" class="link">
            <span>FIAP</span>
            <span class="font-weight-light">Jogos</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="add-game">
        <v-icon>games</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="ma-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  .link {
    text-decoration: none;
    color: grey!important;
  }
</style>
