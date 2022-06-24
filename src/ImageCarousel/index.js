import React, { useState } from 'react'
import { Image, Button, ImageCouraselContainer } from './styles'
const ImageCarousel = ({ images = [] }) => {
  const [imageIndex, setIndex] = useState(0)
  return (
    <ImageCouraselContainer>
      <Button
        onClick={() => {
          imageIndex > 0 && setIndex(imageIndex - 1)
        }}
      >
        {'<'}
      </Button>
      <Image src={images[imageIndex]} />
      <Button
        onClick={() => {
          imageIndex < images.length - 1 && setIndex(imageIndex + 1)
        }}
      >
        {'>'}
      </Button>
    </ImageCouraselContainer>
  )
}

export default ImageCarousel
