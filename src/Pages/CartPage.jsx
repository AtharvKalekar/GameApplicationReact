import React, { useContext } from 'react';
import { GameContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, emptyCart, increaseQuantity, decreaseQuantity } = useContext(GameContext);

    
    const totalPrice = cart.reduce((acc, game) => acc + (game.priceInRupees * game.quantity), 0);

    const handleIncreaseQuantity = (id) =>{
        increaseQuantity(id)
    }

    const handleDecreaseQuantity = (id) =>{
        decreaseQuantity(id)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to='/' className="text-black no-underline focus:outline-none hover:text-black">
                <h2 className='text-[20px]'>Cart Page</h2>
            </Link>
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                {cart && cart.length > 0 ? (
                    cart.map((game, index) => (
                        <div key={index} className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
                            <img src={game.image} alt={game.name} className="w-full h-auto rounded-lg" />
                            <p className="text-xl bg-green-500 text-white">Price: Rs {game.priceInRupees}</p>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <button  
                                        onClick={()=>{handleDecreaseQuantity(game.id)}}
                                        className="bg-blue-500 text-white py-1 px-3 rounded-full">-</button>
                                    <input type="text" value={game.quantity || ''} readOnly className="mx-2 text-lg w-16 text-center" />
                                    <button 
                                     onClick={()=>{handleIncreaseQuantity(game.id) }}
                                     className="bg-blue-500 text-white py-1 px-3 rounded-full">+</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-[20px] p-4 ">No games in the cart</p>
                )}
                <p className="text-[25px] text-white bg-red-500">Total Price: Rs {totalPrice}</p>
                <button onClick={emptyCart}
                        className='bg-red-500 text-white m-5'>Clear Cart</button>
            </div>
        </div>
    );
};

export default CartPage;





