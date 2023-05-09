import "./Equipo.css";
import { Colaborador } from "../Colaborador";
export const Equipo = (props) => {
  //Destructuracion
  const { colorS, colorP, titulo } = props.equipo;
  const { colaboradores } = props;
  return (
    <section className="equipo" style={{ backgroundColor: colorS }}>
      <h3 style={{ borderColor: colorP }}>{titulo}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador datos={colaborador} />
        ))}
      </div>
    </section>
  );
};
