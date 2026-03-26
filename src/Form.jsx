import React, { useState } from 'react'

const getTextColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#ffffff';
};

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