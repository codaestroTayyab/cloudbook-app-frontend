import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) =>{

    const notesIntial = [
        {
          "_id": "62df1e79fab35679b9da8b3f",
          "user": "62df0c9de3d2a53c9a7b3a32",
          "title": "Bara kaam2",
          "description": "Finish Mern Stack project3",
          "tag": "important",
          "date": "2022-07-25T22:51:37.153Z",
          "__v": 0
        },
        {
          "_id": "62e4416eadd702edaba939bc",
          "user": "62df0c9de3d2a53c9a7b3a32",
          "title": "First work",
          "description": "Mern Project",
          "tag": "important",
          "date": "2022-07-29T20:22:06.841Z",
          "__v": 0
        },
        {
          "_id": "62e44171add702edaba939be",
          "user": "62df0c9de3d2a53c9a7b3a32",
          "title": "First work",
          "description": "Mern Project",
          "tag": "important",
          "date": "2022-07-29T20:22:09.045Z",
          "__v": 0
        },
        {
          "_id": "62e44171add702edaba939c0",
          "user": "62df0c9de3d2a53c9a7b3a32",
          "title": "First work",
          "description": "Mern Project",
          "tag": "important",
          "date": "2022-07-29T20:22:09.859Z",
          "__v": 0
        },
        {
          "_id": "62e44172add702edaba939c2",
          "user": "62df0c9de3d2a53c9a7b3a32",
          "title": "First work",
          "description": "Mern Project",
          "tag": "important",
          "date": "2022-07-29T20:22:10.372Z",
          "__v": 0
        },
        {
          "_id": "62e44190add702edaba939c4",
          "user": "62df0c9de3d2a53c9a7b3a32",
          "title": "Namaz",
          "description": "Everyday",
          "tag": "important",
          "date": "2022-07-29T20:22:40.342Z",
          "__v": 0
        },
        {
          "_id": "62e44190add702edaba939c6",
          "user": "62df0c9de3d2a53c9a7b3a32",
          "title": "Namaz",
          "description": "Everyday",
          "tag": "important",
          "date": "2022-07-29T20:22:40.989Z",
          "__v": 0
        },
        {
          "_id": "62e44191add702edaba939c8",
          "user": "62df0c9de3d2a53c9a7b3a32",
          "title": "Namaz",
          "description": "Everyday",
          "tag": "important",
          "date": "2022-07-29T20:22:41.928Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesIntial)

      //Add note
      const addNote = (title, description, tag)=>{
        console.log('Adding a note')
        let note = {
          "_id": "62e44191add702edaba929c8",
          "user": "62df0c9de3d2a53c9a7a3a32",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-07-29T20:22:41.928Z",
          "__v": 0
        }
        setNotes(notes.concat(note));
      }
      //Delete note
      const deleteNote = ()=>{

      }
      //Edit note
      const editNote = ()=>{
        
      }
    return(

        <NoteContext.Provider value = {{notes, setNotes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    );

}

export default NoteState;