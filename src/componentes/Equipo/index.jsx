import "./Equipo.css";
import { Colaborador } from "../Colaborador";
export const Equipo = (props) => {
  //Destructuracion
  const { colorS, colorP, titulo } = props.equipo;
  const { colaboradores } = props;
  console.log(colaboradores.length > 0);
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={{ backgroundColor: colorS }}>
          <h3 style={{ borderColor: colorP }}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador datos={colaborador} key={index} colorP={colorP} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
