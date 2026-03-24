import React, { useState } from 'react'

const Form = () => {

    const [color, setColor] = useState('');
    const handleSubmit = (e) => {

    }

  return (
    <section className='container'>
        <h4>Generador de Color</h4>
        <form className='color-form' onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={color} onChange={(e)=> setColor(e.target.value)} placeholder='#f253548'/>
            <button type="submit" className='btn' style={{background:color}}>
                Enviar
            </button>
        </form>
    </section>
  )
}

export default Form