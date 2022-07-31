import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = 'http://localhost:5000';
  const notesIntial = [];

  const [notes, setNotes] = useState(notesIntial);

  //Get All Notes
  const getNotes = async ()=>{
    //Api Call
    const response = await fetch(`${host}/cloudbook/notes/getallnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'jwt-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZjBjOWRlM2QyYTUzYzlhN2IzYTMyIn0sImlhdCI6MTY1ODc4NDkzNH0.H3VdbxUX3SfQcqFJkMialP-g1ffkxaoJdu51hWyQ6WA'
      },
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    setNotes(data);
  }

  //Add note
  const addNote = (title, description, tag) => {
    console.log("Adding a note");
    let note = {
      _id: "62e44191add702edaba929c8",
      user: "62df0c9de3d2a53c9a7a3a32",
      title: title,
      description: description,
      tag: tag,
      date: "2022-07-29T20:22:41.928Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete note
  const deleteNote = (id) => {
    console.log('Deleting note with id = ' + id);
    setNotes(
      notes.filter((note) => {
        return note._id !== id;
      })
    );
  };

  //Edit note
  const editNote = (title, description, tag, id) => {
    //API Call

    //Code to edit note
    for (let index = 0; index < notes.length; index++) {
      const noteElement = notes[index];
      if(noteElement._id === id){
        noteElement.title = title;
        noteElement.description = description;
        noteElement.tag = tag;
        notes[index] = noteElement;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
