import React from "react";
import { useContext } from "react";
import NoteContext from "../contexts/NoteContext";

export default function Alert() {
  let context = useContext(NoteContext);
  let { alert } = context;

  const iconDecider = (type) => {
    if (type === "success") {
      return <i className="fa-solid fa-circle-check mx-2"></i>;
    } else if (type === "danger") {
      return <i className="fa-solid fa-triangle-exclamation mx-2"></i>;
    } else {
      return <i className="fa-solid fa-circle-exclamation mx-2"></i>;
    }
  };
  return (
    <>
      <div style={{ height: "60px", }}>
        {alert && (
          <div className={`alert alert-${alert.type} d-flex align-items-center`} role="alert">
           {iconDecider(alert.type)} {alert.msg}
          </div>
        )}
      </div>
    </>
    //${props.alert.icon}
  );
}
