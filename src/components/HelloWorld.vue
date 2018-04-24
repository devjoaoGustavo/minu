<template>
  <v-layout>
    <v-flex xs12 sm4 offset-sm4>
      <v-card>
        <v-card-media>
          <img src="../assets/background.jpg" height="200px" />
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ msg }}</h3>
            <div>Alguma descrição legal de alguma coisa que está acontecendo...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" to="/catalog">Catálogo</v-btn>
          <v-btn flat color="orange">another place</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'Aqui é o início'
    }
  }
}
</script>
