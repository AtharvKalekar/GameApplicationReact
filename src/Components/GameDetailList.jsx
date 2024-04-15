import React from 'react'
import gameData from '../Data/gamesDetailData.json'
import { Link } from 'react-router-dom'
const GameDetailList = ({gameData}) => {
  return (
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4'>
        {gameData && gameData.length > 0 ?(
        gameData.map((game)=>(
            <div key={game.id} className='border p-4 rounded-md bg-slate-100
                                        hover:scale-110 transition-all duration-300 ease'>
              <Link to={`/game/${game.id}`} className='text-black' >                            
              <img src={game.image} 
              className="rounded-lg object-cover h-[150px] w-full" alt="Game Image" />
              <h2 className='text-[20px] font-bold'>{game.name}</h2>
              </Link>
            </div>
        ))):(
          <h2 className='text-[20px] font-extrabold'>0 results match your search</h2>
        )}
    </div>
    </div>
  )
}

export default GameDetailList