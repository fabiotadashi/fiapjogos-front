import Vue from 'vue'
import store from "@/config/store"
import GameService from '@/services/game.service'

const state = {
    gameList: {
        data: [],
        error: null
    },
    gameDetail: {
        data: {},
        error: null
    },
    createdGame: {
        data: {},
        error: null
    }
}

const getters = {
}

const actions = {
    async fetchGames({ commit }) {
        try {
            const games = await GameService.getGames()
            commit('updateGameList', games)
        } catch (error) {
            commit('errorGameList', error)
        }
    },
    async fetchGameDetail({ commit }, parameters) {
        try {
            const gameDetail = await GameService.getGameDetail(parameters.gameId)
            commit('updateGameDetail', gameDetail)
        } catch (error) {
            commit('errorGameDetail', error)
        }
    },
    async createGame({ commit }, parameters) {
        try {
            const game = await GameService.createGame(parameters)
            commit('updateCreatedGame', game)
        } catch (error) {
            commit('errorCreateGame', error)
        }
    }
}

const mutations = {
    updateGameList(state, gameList) {
        const updateData = { data: gameList, error: null }
        Vue.set(state, 'gameList', updateData)
    },
    errorGameList(state, error) {
        const updateData = { data: [], error: error }
        Vue.set(state, 'gameList', updateData)
    },
    updateGameDetail(state, gameDetail) {
        const updateData = { data: gameDetail, error: null }
        Vue.set(state, 'gameDetail', updateData)
    },
    errorGameDetail(state, error) {
        const updateData = { data: {}, error: error }
        Vue.set(state, 'gameDetail', updateData)
    },
    updateCreatedGame(state, game) {
        const updateData = { data: game, error: null }
        Vue.set(state, 'createdGame', updateData)
    },
    errorCreateGame(state, error) {
        const updateData = { data: {}, error: error }
        Vue.set(state, 'createdGame', updateData)
    }
}

const module = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

store.registerModule('games', module)

export default module