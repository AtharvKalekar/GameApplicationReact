import logo from './../assets/Images/logo.png'
import { SlMagnifier } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import SearchFilter from './SearchFilter';
import gamesData from '../Data/gamesDetailData.json'

function Header({ setInputFocused, setSearchedData}) {

  const [stringData, setStringData] = useState('')


  const handleInputFocus = () => {
    setInputFocused(true)
  }
  const handleInputBlur = () => {
    setInputFocused(false)
  }
  const handleInput = (e) => {
    // setStringData(e.target.value)
    // console.log(stringData);
    // filterData()
    const searchString = e.target.value
    setStringData(searchString)
    if (searchString !== '') {
      const filteredData = gamesData.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()))
      setSearchedData(filteredData)
    }
    else {
      setSearchedData(null)
    }
  }
  
  return (
    <div className='flex items-center p-3'>
      <Link to="/">
        <img src={logo} width={60} height={60} alt="Logo Image" />
      </Link>
      <div className='flex bg-slate-300 p-2 w-full mx-5 rounded-full items-center' >
        <SlMagnifier/>
        <input type="text" placeholder='Search Games' className='px-2 bg-transparent outline-none'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={stringData}
          onChange={handleInput}
        />
      </div>
      
      <div>
            <Link to={'/cart'}>
            <IoCartOutline className='cart-icon text-[35px] text-black relative' />
          </Link>
      </div>
    </div>
  )
}
export default Header