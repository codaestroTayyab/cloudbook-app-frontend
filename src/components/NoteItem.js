import React, { useContext } from "react";
import NoteContext from "../contexts/NoteContext";

export default function NoteItem(props) {

  const context = useContext(NoteContext);
  const { deleteNote} = context;
  let { note, updateNote } = props;

  const tagColorDecider = (tag)=>{
    if(tag === "Important")
    {
      return "danger"
    }
    else if(tag === "Daily Life"){
      return "warning"
    }
    else{
      return "primary"
    }
  }
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
        <span className={`badge text-bg-${tagColorDecider(note.tag)} my-1`}>{note.tag}</span>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          
          <i
            className= "fa-solid fa-trash-can mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{
            updateNote(note);
          }}></i>
        </div>
      </div>
    </div>
  );
}
