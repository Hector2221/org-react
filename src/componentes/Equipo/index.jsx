import hexToRgba from "hex-to-rgba";
import "./Equipo.css";
import { Colaborador } from "../Colaborador";
export const Equipo = (props) => {
  //Destructuracion
  const { colorS, colorP, titulo, id } = props.equipo;
  const { colaboradores, deleteuser, colorUpdate } = props;

  const obj = {
    backgroundColor: hexToRgba(colorP, "0.6"),
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
            type="color"
            className="color"
            value={colorP}
            onChange={(e) => {
              colorUpdate(e.target.value, id);
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
