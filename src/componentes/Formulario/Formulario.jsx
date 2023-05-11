import "./Formulario.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { CampoTexto } from "../CampoTexto";
import { ListaOpciones } from "../ListaOpciones";
import { Boton } from "../Boton";

export const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setpuesto] = useState("");
  const [foto, setfoto] = useState("");
  const [equipo, setEquipo] = useState("");

  //destrocturar
  const { registrar } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("majear envio");

    let datosEnviar = {
      id: uuidv4(),
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrar(datosEnviar);
  };

  return (
    <section className="formulario">
      <form className="formulario__form" onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          setValor={setpuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          setValor={setfoto}
        />
        <ListaOpciones
          valor={equipo}
          setValor={setEquipo}
          equipo={props.equipo}
        />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};
