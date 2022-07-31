import React from "react";
import { useContext, useEffect } from "react";
import NoteContext from "../contexts/NoteContext";
import NoteItem from "./NoteItem";
export default function Notes() {
  let { notes, getNotes} = useContext(NoteContext);
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className="row my-3">
      <h2 className="my-3">Your Notes</h2>
      {notes.map((note) => {
        return (
            <NoteItem key={note._id} note = {note}/>
        );
      })}
    </div>
  );
}
