<template>
  <div class="game">
    <v-container grid-list-lg >
      <v-card max-width="900px">
        <v-card-title primary-title>
          {{ gameId }}
        </v-card-title>
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

            <v-list>
              <v-list-item-group v-model="item" color="primary">
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
              </v-list-item-group>
            </v-list>
        </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        game: {
          id: 1,
          name: 'CS:GO',
          category: 'ACTION',
          releaseDate: '01/10/2010',
          rating: 'L',
          imageUrl: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg',
          characterList: [
            {
              name: 'CT',
              imageUrl: 'https://www.pngkey.com/png/detail/227-2279373_counter-terrorist-from-the-game-cs-counter-strike.png'
            },
            {
              name: 'Terror',
              imageUrl: 'https://vrcmods.com/imgs/4GtwsHNSLhVU.jpg'
            }
          ]
        }
      }
    },
    computed: {
      gameId() {
        return this.$route.params.gameId;
      }
    }
  }
</script>
