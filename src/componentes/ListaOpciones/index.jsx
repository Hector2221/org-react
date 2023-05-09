import "./ListaOpciones.css";

export const ListaOpciones = (props) => {
  const getCambio = (e) => {
    props.setValor(e.target.value);
  };
  return (
    <div className="ListaOpciones">
      <label>Equipos</label>
      <select value={props.value} onChange={getCambio} defaultValue="">
        <option disabled hidden value="">
          Selecciona un equipo
        </option>
        {props.equipo.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};
