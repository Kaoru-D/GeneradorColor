import { nanoid } from 'nanoid';
import OneColor from './OneColor';

const ColorList = ({colors}) => {


  return (
    <section className='colors'>
        {colors.map((color) => {
          return  <OneColor key={nanoid()} color={color} />;
        })}
    </section>
  )
}

export default ColorList