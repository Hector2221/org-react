import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { Header } from "./componentes/Header/Header.jsx";
import { Formulario } from "./componentes/Formulario/Formulario.jsx";
import { MiOrg } from "./componentes/MiOrg";
import { Equipo } from "./componentes/Equipo";
import { Footer } from "./componentes/Footer";

function App() {
  const [formulario, estadoFormulario] = useState(false);
  const [colaboradores, setcolaboradores] = useState([]);
  const [equipo, setequipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorP: "#57C278 ",
      colorS: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorP: "#82CFFA ",
      colorS: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorP: "#A6D157 ",
      colorS: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorP: "#E06B69 ",
      colorS: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorP: "#DB6EBF ",
      colorS: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorP: "#FFBA05 ",
      colorS: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorP: "#FF8A29 ",
      colorS: "#FFEEDF",
    },
  ]);
  //Ternario --> condicion ? seMuestra : NoSeMuestra

  const cambiarMostrar = () => {
    estadoFormulario(!formulario);
  };

  //Actualiza color de equipo
  const colorUpdate = (color, id) => {
    console.log(color, id);
    const equipos = equipo.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorP = color;
      }
      return equipo;
    });
    setequipos(equipos);
  };

  //Registrar colaborador
  const registrar = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);

    //Spread operator  copea el arreglo antiguo y agrega el nuevo valor
    setcolaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id);
    const newColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id;
    });
    console.log(newColaboradores);
    setcolaboradores(newColaboradores);
  };

  //like
  const like = (id) => {
    const likecolaborador = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    setcolaboradores(likecolaborador);
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
          colorUpdate={colorUpdate}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          deleteuser={eliminarColaborador}
          like={like}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
