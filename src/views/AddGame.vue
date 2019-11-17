<template>
  <div class="addGame">
    <v-layout>
      <v-card 
        class="mx-auto"
        width="500px">
        <v-card-title primary-title>
          Cadastrar novo jogo
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              name="name"
              label="Nome"
              id="nome"
              v-model="game.name"
            ></v-text-field>
            <v-text-field
              name="imageUrl"
              label="URL da Imagem"
              id="imageUrl"
              v-model="game.imageUrl"
            ></v-text-field>
            <v-text-field
              name="rating"
              label="Classificação"
              id="rating"
              v-model="game.rating"
            ></v-text-field>
            <v-select
                :items="categorias"
                label="Categoria"
              v-model="game.category"
            ></v-select>
            <v-text-field
              name="releaseDate"
              label="Data de lançamento (aaaa-mm-dd)"
              id="releaseDate"
              v-model="game.releaseDate"
            ></v-text-field>
            <v-btn
              color="success"
              class="mr-4"
              @click="submit"
            >
              Cadastrar
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-layout>

    <v-snackbar
      v-model="snackbar"
    >
      Jogo cadastrado com sucesso
      <v-btn
        color="green"
        text
        @click="snackbar = false"
      >
        Fechar
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'addGame',
  components: {
  },
  data() {
    return {
      game: {},
      categorias:["ACTION","ADVENTURE","RPG","OTHER"],
      snackbar: false
    }
  },
  methods: {
    submit(){
      this.$store.dispatch('games/createGame', this.game)
      .then(() => {
        this.game = {}
        this.snackbar = true
      })
    }
  }
}

</script>
