import "./ListaOpciones.css";

export const ListaOpciones = (props) => {
  const equipo = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const getCambio = (e) => {
    props.setValor(e.target.value);
  };
  return (
    <div className="ListaOpciones">
      <label>Equipos</label>
      <select value={props.value} onChange={getCambio}>
        <option selected disabled hidden>
          Selecciona un equipo
        </option>
        {equipo.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};
