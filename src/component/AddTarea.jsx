import React from "react";

export default function AddTarea({ item, handleChange, handleClick }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Agrega tu tarea"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        name="tarea"
        onChange={handleChange} 
        value={item}
        id="tarea"
        autoComplete="off"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-info"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
