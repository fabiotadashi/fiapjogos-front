<template>
  <div class="home">
    <v-container>
      <v-row class='pa-2'>
          <v-col v-for="game in gameList" :key="game.name">
              <v-card >
                <router-link :to="{ name: 'game', params: { gameId: game.name }}" class="link">
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
  data() {
    return {
      gameList: [
        { "name":"CS:GO 1", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 2", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 3", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 4", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 5", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 6", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 7", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 8", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 9", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 10", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 11", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 12", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 13", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 14", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 15", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 16", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 17", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 18", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 19", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 20", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 21", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 22", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 23", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 24", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 25", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 26", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 27", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" },
        { "name":"CS:GO 28", "imageUrl":"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/03/272612.jpg" }
      ]
    }
  }
}
</script>
