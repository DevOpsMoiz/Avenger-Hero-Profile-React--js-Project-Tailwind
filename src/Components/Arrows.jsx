import React from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Arrows = ({handleNextImage,handlePrevImage}) => {
  return (
    <div>
      <BsArrowLeftCircleFill onClick={handlePrevImage} className='absolute top-[50%] left-[-10%]' size={40} />
      <BsArrowRightCircleFill onClick={handleNextImage} className='absolute top-[50%] right-[-10%]' size={40}/>
    </div>
  )
}

export default Arrows
