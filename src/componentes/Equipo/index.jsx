import { useState } from "react";
import "./Equipo.css";
import { Colaborador } from "../Colaborador";
export const Equipo = (props) => {
  //Destructuracion
  const { colorS, colorP, titulo } = props.equipo;
  const { colaboradores, deleteuser, colorUpdate } = props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={{ backgroundColor: colorS }}>
          <input
            type="color"
            className="color"
            value={colorS}
            onChange={(e) => {
              colorUpdate(e.target.value, titulo);
            }}
          />
          <h3 style={{ borderColor: colorP }}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorP={colorP}
                deleteuser={deleteuser}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
