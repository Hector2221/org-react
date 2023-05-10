import "./Colaborador.css";

export const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo } = props.datos;
  const { colorP } = props;
  return (
    <div className="colaborador">
      <div className="encabezado" style={{ backgroundColor: colorP }}>
        <img src="https://github.com/Hector2221.png" alt="" />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  );
};
