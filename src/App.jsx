import { useState } from "react";
import "./App.css";
import { Header } from "./componentes/Header/Header.jsx";
import { Formulario } from "./componentes/Formulario/Formulario.jsx";
import { MiOrg } from "./componentes/MiOrg";
import { Equipo } from "./componentes/Equipo";
import { Footer } from "./componentes/Footer";

function App() {
  const [formulario, estadoFormulario] = useState(false);
  const [colaboradores, setcolaboradores] = useState([]);
  //Ternario --> condicion ? seMuestra : NoSeMuestra

  const cambiarMostrar = () => {
    estadoFormulario(!formulario);
  };

  // lista de equipo
  const equipo = [
    { titulo: "Programación", colorP: "#57C278 ", colorS: "#D9F7E9" },
    { titulo: "Front End", colorP: "#82CFFA ", colorS: "#E8F8FF" },
    { titulo: "Data Science", colorP: "#A6D157 ", colorS: "#F0F8E2" },
    { titulo: "Devops", colorP: "#E06B69 ", colorS: "#FDE7E8" },
    { titulo: "UX y Diseño", colorP: "#DB6EBF ", colorS: "#FAE9F5" },
    { titulo: "Móvil", colorP: "#FFBA05 ", colorS: "#FFF5D9" },
    { titulo: "Innovación y Gestión", colorP: "#FF8A29 ", colorS: "#FFEEDF" },
  ];

  //Registrar colaborador
  const registrar = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);

    //Spread operator  copea el arreglo antiguo y agrega el nuevo valor
    setcolaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = () => {
    console.log("eliminar colaborador");
  };

  return (
    <>
      <Header />

      {formulario == true ? (
        <Formulario
          equipo={equipo.map((equipo) => equipo.titulo)}
          registrar={registrar}
        />
      ) : (
        <></>
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipo.map((equipo) => (
        <Equipo
          equipo={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          deleteuser={eliminarColaborador}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
