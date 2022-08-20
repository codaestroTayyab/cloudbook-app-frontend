import React, { useContext, useState } from "react";
import NoteContext from "../contexts/NoteContext";

export default function AddNote() {
  const context = useContext(NoteContext);
  let { addNote } = context;
  const handleAddClick = (event) => {
    event.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: note.tag });
  };
  const [note, setNote] = useState({ title: "", description: "", tag: ""});
  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const options = [
    { value: "Important", text: "Important" },
    { value: "Daily Life", text: "Daily Life" },
    { value: "General", text: "General" },
  ];

  
  return (
    <div>
      <div className="container" style={{ width: "30rem", marginTop: "18px", marginBottom: "3rem" }}>
        <h2 className="text-center fw-bold">Add Note</h2>
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
              placeholder="Enter Title Here (Atleast 3 characters)"
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
              placeholder="Enter Description Here (Atleast 5 characters)"
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
            <select className="form-select form-select" aria-label=".form-select example" name="tag" id="tag" onChange={handleChange}>
              <option selected disabled>Select Note Tag</option>
              {options.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </select>
            {/* <input type="text" name="tag" id="tag" placeholder="Enter Tag Here" className="form-control" onChange={handleChange} value={note.tag} /> */}
          </div>
          <button type="submit" className="btn btn-primary" disabled={note.title.length < 3 || note.description.length < 5}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}
