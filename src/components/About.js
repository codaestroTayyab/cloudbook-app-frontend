import React from "react";
import { useContext } from "react";
import NoteContext from "../contexts/NoteContext";
import logo from "../AboutCloudbook2.gif";

export default function About() {
  // eslint-disable-next-line
  const a = useContext(NoteContext);
  return (
    <div className="container d-flex">
      <div className="container p-2 flex-grow-1 my-5">
        <h1 className="fw-bold">Cloudbook</h1>
        <h2 className="fw-semibold fst-italic">uses Cloud to store your notes securely for all your lifetime.</h2>
        <div className="my-3">
          <div className="fs-2 fw-light">It's your Personal Notebook on the Cloud.</div>
          <p className="">Developed in MERN Stack with Bootstrap v5.2</p>
        </div>
      </div>
      <img className="p-2" src={logo} alt="Cloudbook" />
    </div>
  );
}
