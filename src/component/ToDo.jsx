import React, { useEffect, useState } from "react";
import AddTarea from "./AddTarea";
import TareasList from "./TareasList";

export default function ToDo() {
  //uso state para guardar la data de las tareas
  //Inicializo el estado con el valor de localStorage si hay datos sino
  // un arreglo vacio
  const [state, setstate] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //manejar los valores que se ingresen por el input para agregar tarea
  const [item, setItem] = useState("");

  //componentWillUpdate: actualizo el localStorage cada vez que cambia state
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  // seteo el valor del item con lo que se escribió en el input
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  //Funcion cuando se hace clic en el boton para enviar tarea
  const handleClick = () => {
    if (item.length >= 5) {
      let dato = {
        id: state.length + 1,
        tarea: item,
        done: false,
      };

      setstate([...state, dato]);

      setItem("");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 mt-3">
          <h1>Lista de Tareas</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <AddTarea
            item={item}
            handleChange={handleChange}
            handleClick={handleClick}
          />

          <div>
            <TareasList state={state} setState={setstate} />
          </div>
        </div>
      </div>
    </div>
  );
}
