import "./MiOrg.css";

export const MiOrg = (props) => {
  //Hook useState
  //   const [nombre, actualizarNombre] = useState(true);
  //   const manejarClick = () => {
  //     actualizarNombre(!nombre);
  //   };

  return (
    <sec className="orgSection">
      <h3>Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </sec>
  );
};
