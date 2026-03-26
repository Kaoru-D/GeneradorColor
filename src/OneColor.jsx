import React from 'react'
import { toast } from 'react-toastify'
import { getTextColor } from './utils';

const OneColor = ({color}) => {
  const {hex, weight} = color;
  const textColor = getTextColor(hex);
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Color #${hex} copiado al portapapeles!`);
      } catch (err) {
        toast.error('Error al copiar el color: ' + err.message);
      }
    }else {
      toast.error('El portapapeles no es compatible con este navegador.');
    }
  }

  return (
    <article className='color' style={{background:`#${hex}`}} onClick={saveToClipboard}>
      <p className='percent-value' style={{color: textColor}}>{weight}%</p>
      <p className='color-value' style={{color: textColor}}>#{hex}</p>
    </article>
  )
}

export default OneColor