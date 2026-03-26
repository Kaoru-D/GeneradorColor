import React from 'react'
import { getTextColor } from './utils';

const OneColor = ({index, color}) => {
  const {hex, weight} = color;
  const textColor = getTextColor(hex);

  return (
    <article className={index>20?'color color-light':'color'} style={{background:`#${hex}`}}>
      <p className='percent-value' style={{color: textColor}}>{weight}%</p>
      <p className='color-value' style={{color: textColor}}>#{hex}</p>
    </article>
  )
}

export default OneColor