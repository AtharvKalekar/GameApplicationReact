import { useEffect, useState } from 'react'
import banner1 from './../assets/Images/Banner1.jpg'
import banner2 from './../assets/Images/Banner2.jpg'
import banner3 from './../assets/Images/Banner3.webp'
import banner4 from './../assets/Images/Banner4.jpg'
import banner5 from './../assets/Images/Banner5.webp'
//images array
const images = [banner1, banner2, banner3, banner4, banner5]
const Banner = () => {
  const [currImage,setCurrImage] = useState(0)

  const nextSlide = () =>{
    setCurrImage((prevIndex)=> (prevIndex === images.length -1 ? 0 : prevIndex + 1 ))
  }
  useEffect(()=>{
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className='relative w-full overflow-hidden'>
    <div className='flex' style={{ width: `${images.length * 100}%`, transform: `translateX(-${currImage * (100 / images.length)}%)` }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className='w-auto h-auto md:h-[320px] pb-2 rounded-2xl'
          style={{ minWidth: `${100 / images.length}%` }}
        />
      ))}
    </div>
  </div>
);
}

export default Banner