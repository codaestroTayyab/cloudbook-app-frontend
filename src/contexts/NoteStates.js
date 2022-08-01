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
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/cloudbook/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      
      headers: {
        'Content-Type': 'application/json',
        'jwt-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZjBjOWRlM2QyYTUzYzlhN2IzYTMyIn0sImlhdCI6MTY1ODc4NDkzNH0.H3VdbxUX3SfQcqFJkMialP-g1ffkxaoJdu51hWyQ6WA'
      },
      body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
    }); 
    console.log("Adding a note");
    const note = await response.json()
    setNotes(notes.concat(note));
  };
  //Delete note
  const deleteNote = async (id) => {
    
    console.log('Deleting note with id = ' + id);
    const response = await fetch(`${host}/cloudbook/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      
      headers: {
        'Content-Type': 'application/json',
        'jwt-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZjBjOWRlM2QyYTUzYzlhN2IzYTMyIn0sImlhdCI6MTY1ODc4NDkzNH0.H3VdbxUX3SfQcqFJkMialP-g1ffkxaoJdu51hWyQ6WA'
      },
    }); 
    setNotes(
      notes.filter((note) => {
        return note._id !== id;
      })
    );
    const data = await response.json(); // parses JSON response into native JavaScript objects
    console.log(data);
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
