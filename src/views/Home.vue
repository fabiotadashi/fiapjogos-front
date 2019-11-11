<template>
  <div class="home">
    <v-container>
      <v-row>
          <v-col 
            v-for="game in gameList" 
            :key="game.id"
            :md="4"
            >
              <v-card>
                <router-link :to="{ name: 'game', params: { gameId: game.id }}" class="link">
                  <v-img
                    :src="game.imageUrl"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="400px"
                  >
                    <v-card-title primary-title>
                      {{game.name}}
                    </v-card-title>
                  </v-img>
                </router-link>
              </v-card>
                          
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  created() {
    this.$store.dispatch('games/fetchGames')
  },
  computed: {
    gameList() {
      return this.$store.state.games.gameList.data
    }
  }
}
</script>
