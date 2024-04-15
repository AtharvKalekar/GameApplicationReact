import gameData from '../Data/gamesDetailData.json'

export const getGameById = (id) =>{
    return gameData.find((game)=>game.id === parseInt(id))
}