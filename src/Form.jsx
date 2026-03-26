import React, { useState } from 'react'
import { getTextColor } from './utils';

const Form = ({addColor}) => {

    const [color, setColor] = useState('#ffffff');
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
    }

  return (
    <section className='container'>
        <h4>Generador de Color</h4>
        <form className='color-form' onSubmit={handleSubmit}>
            <input type="color" value={color} onChange={(e)=> setColor(e.target.value)} />
            <input type="text"  value={color} onChange={(e)=> setColor(e.target.value)} placeholder='#a1161f'/>
            <button type="submit" className='btn' style={{background:color, color: getTextColor(color)}}>
                Cambiar
            </button>
        </form>
    </section>
  )
}

export default Form