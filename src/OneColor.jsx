import React from 'react'

const OneColor = ({index, color}) => {
  console.log(color)
  const {hex, weight} = color;

  return (
    <article className={index>20?'color color-light':'color'} style={{background:`#${hex}`}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}

export default OneColor