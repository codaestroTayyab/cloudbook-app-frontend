import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../contexts/NoteContext";
import NoteItem from "./NoteItem";
export default function Notes() {
  let { notes, getNotes, editNote, alertShow } = useContext(NoteContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      alertShow("Kindly first Login to access your notes", "danger")
      navigate("/login");
    }

    // eslint-disable-next-line
  }, []);

  //note state to store notes for frontend
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  //ref for modal launch button
  const ref = useRef(null);
  //ref for modal close button
  const refClose = useRef(null);
  //updateNote function triggers when user clicks on edit icon
  const updateNote = (currentNote) => {
    //reference of edit icon
    ref.current.click();
    //populating data in modal
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  //handleEditClick function called when "Save Changes" button is clicked
  const handleEditClick = (event) => {
    //Sending data to editNote function of NoteStates context
    editNote(note.etitle, note.edescription, note.etag, note.id);
    //prevents page from reloading
    event.preventDefault();
    //reference of close button to close modal when note updated
    refClose.current.click();
  };
  const handleChange = (event) => {
    //spread operator used
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const options = [
    { value: "", text: "--None--"},
    { value: "Important", text: "Important" },
    { value: "Daily Life", text: "Daily Life" },
    { value: "General", text: "General" },
  ];

  return (
    <>
      <div>
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
          Launch demo modal
        </button>

        <form onSubmit={handleEditClick}>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit Note
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={refClose}></button>
                </div>
                <div className="modal-body">
                  {" "}
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      value={note.etitle}
                      minLength={3}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      name="edescription"
                      id="edescription"
                      className="form-control"
                      onChange={handleChange}
                      value={note.edescription}
                      minLength={3}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleTag" className="form-label">
                      Tag
                    </label>
                    <select className="form-select form-select" aria-label=".form-select example" name="etag" id="etag" onChange={handleChange}>
                      <option disabled>
                        Select Note Tag
                      </option>
                      {options.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.text}
                          </option>
                        );
                      })}
                    </select>
                    {/* <input type="text" name="etag" id="etag" className="form-control" onChange={handleChange} value={note.etag} /> */}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={note.etitle.length < 3 || note.edescription.length < 5}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="row my-3">
        <h2 className="my-3">Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
}
