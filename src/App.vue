<template>
  <div id="app">
    <v-toolbar color="yellow darken-3">
      <v-spacer />
      <v-btn icon to="/catalog" router>
        <v-icon>view_module</v-icon>
      </v-btn>
      <v-btn icon to="/" router>
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
