import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { getGameById } from '../Services/GameServices';
import { GameContext } from '../Context/CartContext';

const GamesPage = () => {
  const { id } = useParams();
  const selectedGame = getGameById(id);
  const {addToCart} = useContext(GameContext  )
  
  if (!selectedGame) {
    return <h1>Game not found</h1>;
  }
 
  const handleAddToCart = () =>{
    addToCart(selectedGame)
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2'>
        <div className='bg-white p-5 ml-5 rounded-lg'>
          <img src={selectedGame.image} alt="" className='w-full h-auto object-cover rounded-lg' />
        </div>
        <div className='p-10 rounded-lg mr-5'>
          <h1 className='text-3xl font-bold' style={{ color: '#333' }}>{selectedGame.name}</h1>
          <p className='text-lg '>{selectedGame.description}</p>
          <p className='text-lg font-bold'>Category: {selectedGame.category}</p>
          <p className='text-lg font-bold'>Rating: <span className='text-yellow-500'>{selectedGame.rating}</span></p>
          <p className='text-lg font-bold'>Price Rs: {selectedGame.priceInRupees}</p>
          <div className='flex mt-4'>
            <Link to='/cart'>
            <button 
                    onClick={handleAddToCart}  
                    className="bg-blue-500 
                              hover:bg-blue-600 
                              text-white 
                              py-2 px-4 rounded mr-2">Add to cart</button>
            </Link>
            <Link to='/cart'>
            <button className="bg-green-500  
                               hover:bg-green-600 
                               text-white 
                               py-2 px-4 rounded">View Cart</button>
            </Link>          
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesPage;
