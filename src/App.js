import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ImageGallery from './Components/ImageGallery'
import MemeMaker from './Components/MemeMaker'
import './styles.css'

function App() {
    const [selectedImage, setSelectedImage] = useState(``)
    useEffect(() => {
        console.log(`selected image is ${selectedImage}`)
    },[selectedImage])
  return (
    <div>App
        <ImageGallery setSelectedImage = {setSelectedImage}/>
        <MemeMaker currentImage={selectedImage}/>
    </div>
  )
}

export default App