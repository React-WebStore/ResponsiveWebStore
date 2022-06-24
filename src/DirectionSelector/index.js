import React from 'react'
import { Directions, Direction } from './styles'
const DirectionSelector = ({ setDirection = () => {} }) => (
  <Directions>
    <Direction
      onClick={() => setDirection('row')}
      src='https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/DoubleArrowLeftRight-512.webp?alt=media&token=f851743f-9436-4fda-ac74-0c53ea05f655'
    />
    <Direction
      onClick={() => setDirection('column')}
      src='https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/751136_multimedia_512x512.png?alt=media&token=497736a6-546f-4f78-bf63-89b3b412cb85'
    />
  </Directions>
)

export default DirectionSelector
