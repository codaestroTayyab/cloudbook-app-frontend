import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

export default function Home() {
  return (
    <>
  
      <div className="container">
        <AddNote />
        <Notes />
      </div>
    </>
  );
}
