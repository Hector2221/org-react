import { useState } from "react";
import "./App.css";
import { Header } from "./componentes/Header/Header.jsx";
import { Formulario } from "./componentes/Formulario/Formulario.jsx";
import { MiOrg } from "./componentes/MiOrg";

function App() {
  const [formulario, estadoFormulario] = useState(true);
  //Ternario --> condicion ? seMuestra : NoSeMuestra

  const cambiarMostrar = () => {
    estadoFormulario(!formulario);
  };

  return (
    <>
      <Header />
      {formulario == true ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </>
  );
}

export default App;
