import axios from 'axios'
import { BASE_URL } from '@/config/constants'

const API = {

    getGames() {
        const endpoint = BASE_URL+'/games'

        return axios.get(endpoint)
    },

    getGameDetail(gameId) {
        const endpoint = BASE_URL+'/games/'+gameId

        return axios.get(endpoint)
    },

    createGame(game) {
        const endpoint = BASE_URL+'/games/'

        return axios.post(endpoint, game)
    }

}

export default API
