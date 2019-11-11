<template>
  <div class="game">
    <v-container grid-list-lg >
      <v-card max-width="900px">
        <v-img
              class="white--text align-end"
              height="500px"
              :src="game.imageUrl"
            >
            <v-card-title>{{ game.name }}</v-card-title>
            </v-img>
            <v-card-text>
              <p>Categoria: {{ game.category }}</p>
              <p>Rating: {{ game.rating }}</p>
              <p>Data de lançamento: {{ game.releaseDate }}</p>
            </v-card-text>

            <v-list-item
              v-for="character in game.characterList"
              :key="character.name"
            >
              <v-list-item-avatar>
                <v-img :src="character.imageUrl"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="character.name"></v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('games/fetchGameDetail', { gameId: this.$route.params.gameId })
    },
    computed: {
      gameId() {
        return this.$route.params.gameId;
      },
      game() {
        return this.$store.state.games.gameDetail.data
      }
    }
  }
</script>
