import gameData from '../Data/gamesDetailData.json'
import { Link } from 'react-router-dom';
const Categories = ( {onCategorySelect} ) => {
  const uniqueCategories = new Set(gameData.map(game=>game.category))

  const handleCategoryClick = (category) => {
    console.log("Selected category:", category);
    onCategorySelect(category);
  };

  return (
    <div className='gap-2 items-center mb-2 cursor-pointer p-2 sticky top-0'>
          <h2 className='text-[30px] font-bold'>Categories</h2>
        {[...uniqueCategories].map((category, index)=>(
           <div key={index} className='overflow-hidden'
                            onClick={()=>handleCategoryClick(category)}>
             <h3 className='text-[18px] 
                               p-2 rounded-lg 
                               transition-transform duration-300 ease-in-out 
                               hover:scale-110 hover:bg-gray-200  
                               hover:flex justify-center items-center'
                              > {category} </h3>
           </div> 
        ))}
    </div>
  )
}
export default Categories