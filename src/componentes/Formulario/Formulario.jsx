import "./Formulario.css";
import { useState } from "react";
import { CampoTexto } from "../CampoTexto";
import { ListaOpciones } from "../ListaOpciones";
import { Boton } from "../Boton";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [puesto, setpuesto] = useState("");
  const [foto, setfoto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("majear envio");
    let datosEnviar = {
      nombre: nombre,
      puesto: puesto,
      fotos: foto,
    };
    console.log(datosEnviar);
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
        <ListaOpciones />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};
