import "./Equipo.css";
export const Equipo = (props) => {
  //Destructuracion
  const { colorS, colorP, titulo } = props.equipo;
  return (
    <section className="equipo" style={{ backgroundColor: colorS }}>
      <h3 style={{ borderColor: colorP }}>{titulo}</h3>
      <div className="colaboradores"></div>
    </section>
  );
};
