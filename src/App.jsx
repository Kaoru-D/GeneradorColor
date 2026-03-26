import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  
  const [colors, setColors] = useState(new Values('#a1161f').all(5));
  const addColor = (color) =>{
    try {
      const newColor = new Values(color).all(5);
      setColors(newColor)
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <main>
      <ToastContainer position="top-right"/>
      <Form  addColor={addColor}/>
      <ColorList colors={colors}/>
    </main>
  );
};
export default App;
