import { nanoid } from 'nanoid';
import OneColor from './OneColor';

const ColorList = ({colors}) => {


  return (
    <section className='colors'>
        {colors.map((color, index) => {
          return  <OneColor key={nanoid()} color={color} index={index}/>;
        })}
    </section>
  )
}

export default ColorList