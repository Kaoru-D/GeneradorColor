import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  
  const [colors, setColors] = useState(new Values('#a1161f').all(10));
  return (
    <main>
      <ToastContainer position="top-right"/>
      <Form />
      <ColorList colors={colors}/>
    </main>
  );
};
export default App;
