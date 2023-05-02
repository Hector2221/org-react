import "./ListaOpciones.css";

export const ListaOpciones = () => {
  const equipo = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];
  return (
    <div className="ListaOpciones">
      <label>Equipos</label>
      <select>
        {equipo.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};
