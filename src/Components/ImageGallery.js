import React from 'react'
import image1 from '../images/template1.jpg'
import image2 from '../images/template2.jpg'
import image3 from '../images/template3.jpg'
import { useState } from 'react'
function ImageGallery({setSelectedImage}) {
    const [currentImageIndex,setCurrentImageIndex] = useState(0)
    const [transition, setTransition] = useState(false)
    const imagesArray = [image1,image2,image3]
    const nextImageHandler = position =>{
      setTransition(true)
      if(position === 'Next'){
        setTimeout(() =>{
          setCurrentImageIndex((currentImageIndex + 1)%imagesArray.length)
          setTransition(false)
        }, 45)
      }
      else if(position === 'Prev'){
        setTimeout(() => {
          setCurrentImageIndex((currentImageIndex - 1 + imagesArray.length)%imagesArray.length)
          setTransition(false)
        },45)
      }  
    }
  return (
    <div className='image-gallery'>
      <div className={`image-container ${transition? 'fade-out':'fade-in'}`}>
        <img src={imagesArray[currentImageIndex]} alt='bullshit'/>
      </div>
      <div className='image-actions'>
      <button onClick={() => nextImageHandler('Prev')}>Previous</button>
      <button onClick={() => setSelectedImage(imagesArray[currentImageIndex])}>Choose Current Image</button>
      <button onClick={() => nextImageHandler('Next')}>Next</button>
      </div>
    </div>
  )
}

export default ImageGallery