import GamesAPI from '@/api/game.api'

class GameService {

    async getGames(){
        try {
            const response = await GamesAPI.getGames()
            if(response && response.data){
                return response.data
            }
        } catch (error){
            throw error
        }
    }

    async getGameDetail(gameId){
        try {
            const response = await GamesAPI.getGameDetail(gameId)
            if(response && response.data){
                return response.data
            }
        } catch (error){
            throw error
        }
    }

    async createGame(game){
        try {
            const response = await GamesAPI.createGame(game)
            if(response && response.data){
                return response.data
            }
        } catch (error){
            throw error
        }
    }

}

export default new GameService()