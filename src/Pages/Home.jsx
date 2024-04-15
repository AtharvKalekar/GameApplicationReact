import React, { useState } from 'react'
import Categories from '../Components/Categories'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import GameDetailList from '../Components/GameDetailList'
import gameData from '../Data/gamesDetailData.json'
function Home() {
  const [inputFocused, setInputFocused] = useState(false);
  const [searchedData, setSearchedData] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isCategorySelected, setIsCategorySelected] = useState(false)


  //category select check
  const handleCategorySelect = (category) =>{
    console.log(category);
    setSelectedCategory(category)
    setSearchedData(null)
    setIsCategorySelected(true)
  }

  const filteredGameData = selectedCategory
    ? gameData.filter((game) => game.category === selectedCategory)
    : gameData
 
  return (
    <>
      <Header 
        setInputFocused={setInputFocused} 
        setSearchedData={setSearchedData}
        />
      <div className='grid grid-cols-4 px-8'>
        <div className='hidden md:block'>
          <Categories onCategorySelect={handleCategorySelect} />
        </div>
        <div className='col-span-4 md:col-span-3 h-full'>
          {!inputFocused && searchedData === null && !isCategorySelected && <Banner />}
          {!inputFocused && searchedData === null && <GameDetailList gameData={filteredGameData || searchedData} />}
          {/* {!inputFocused && searchedData === null && <GameDetailList gameData={searchedData} />} */}
          {searchedData !== null && <GameDetailList gameData={searchedData} />}
        </div>
      </div>
    </>
  )
}
export default Home