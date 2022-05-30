import React from "react";
import Componente from "./components/Componente";
import Contador from "./components/Contador";
const App = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Componente msg="Hola Soy un componente funcional"/>
      <Contador/>
    </div>
  );
}
export default App;
