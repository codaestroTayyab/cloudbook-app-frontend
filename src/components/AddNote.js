import React, { useContext, useState } from "react";
import NoteContext from "../contexts/NoteContext";

export default function AddNote() {
  const context = useContext(NoteContext);
  let { addNote } = context;
  const handleAddClick = (event) => {
    event.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: "" });
  };
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add Note</h2>
        <form onSubmit={handleAddClick}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={handleChange}
              minLength={3}
              required
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              onChange={handleChange}
              minLength={5}
              required
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleTag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              name="tag"
              id="tag"
              className="form-control"
              onChange={handleChange}
              value={note.tag}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={note.title.length < 3 || note.description.length <5}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}
