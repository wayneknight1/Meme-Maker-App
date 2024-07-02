import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function MemeMaker({currentImage}) {
    const canvasRef = useRef(null)
    const [topText,setTopText] = useState('')
    const [bottomText,setbottomText] = useState('')
    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')
        const image = new Image();
        image.src = currentImage
        image.onload = () =>{
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image,0,0)
            ctx.font = '30px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(topText, canvas.width/2, 40)
            ctx.fillText(bottomText, canvas.width/2, canvas.height - 20)
        }
    }, [currentImage, topText, bottomText])
    const downloadMeme = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = 'meme.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
      
  return (
    <div className='meme-maker'>
        <div className='canvas-container'>
        <canvas ref={canvasRef}></canvas>
        </div>
        <div className='text-inputs'>
            <input value={topText} onChange={e => setTopText(e.target.value)} placeholder='Enter Top Text'/>
            <input value={bottomText} onChange={e => setbottomText(e.target.value)} placeholder='Enter Bottom Text'/>
            <button className ='download-button' onClick={downloadMeme}>Download Meme</button>
        </div>
    </div>
  )
}

export default MemeMaker