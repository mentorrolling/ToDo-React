import React from "react";

export default function BtnCounter({ pendientes }) {
  return (
    <button type="button" className="btn btn-warning mb-2">
      <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
      <span className="badge badge-light ml-2">{pendientes.length}</span>
      <span className="sr-only"></span>
    </button>
  );
}
