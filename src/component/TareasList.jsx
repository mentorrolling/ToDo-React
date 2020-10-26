import React, { useEffect, useState } from "react";
import BtnCounter from "./BtnCounter";
import ItemList from "./ItemList";

export default function TareasList({ state, setState }) {
  const [pendientes, setPendientes] = useState(state);

  useEffect(() => {
    tareasPendientes();
  }, [state]);

  const tareasPendientes = () => {
    let cantidad = state.filter((item) => {
      return item.done !== true;
    });

    setPendientes(cantidad);
  };
  const actualizarEstado = (tarea) => {
    state.map((item) => {
      if (item.id === tarea.id) {
        return (item.done = !item.done);
      }
    });

    setState([...state]);
  };

  const borrarTarea = (id) => {
    let arreglo = state.filter((item) => {
      return item.id !== id;
    });

    setState(arreglo);
  };
  return (
    <div>
      <BtnCounter pendientes={pendientes} />

      <ItemList
        state={state}
        actualizarEstado={actualizarEstado}
        borrarTarea={borrarTarea}
      />
    </div>
  );
}
