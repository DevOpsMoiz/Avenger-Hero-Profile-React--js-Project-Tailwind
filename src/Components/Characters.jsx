import React, { useState } from 'react'
import Details from './Details.jsx'
import Arrows from './Arrows.jsx';
import data from '../Data/data.js'


const Characters = () => {
    const [index, setIndex] = useState(0)

    const handleNextImage = () => {
        // Increment index and reset to 0 when reaching the end of the array
        setIndex((prevIndex) => (prevIndex + 1) % (data.length));
    };

    const handlePrevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + data.length) % (data.length));

    };

    

  return (
    <div className='bg-[#2222] text-white relative w-[80vh] h-[80vh] m-auto'>
<Details index={index}></Details>
<Arrows handlePrevImage={handlePrevImage} handleNextImage={handleNextImage}></Arrows>
    </div>
  )
}

export default Characters
