import React from "react";

import "../css/estilo.css";

export default function ItemList({ state, actualizarEstado, borrarTarea }) {
  return (
    <ul className="list-unstyled">
      {state.map((item) => {
        return (
          <li key={item.id} className="mb-3">
            <div className="card shadow-sm d-flex ">
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input  align-items-center"
                    type="checkbox"
                    value={item.done}
                    id="defaultCheck1"
                    checked={item.done}
                    onClick={() => {
                      actualizarEstado(item);
                    }}
                  />
                  <label
                    className={
                      item.done
                        ? "form-check-label text_tachado ml-2  align-items-center"
                        : "form-check-label ml-2  align-items-center"
                    }
                  >
                    {item.tarea}
                  </label>
                  {item.done ? (
                    <button
                      className="btn btn-outline-danger  btn-sm float-right "
                      onClick={() => {
                        borrarTarea(item.id);
                      }}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-danger  btn-sm float-right"
                      disabled
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
