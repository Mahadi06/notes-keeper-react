import React, { useState } from "react";
//import { notes } from "../assests/notes";
import SingleNote from "./SingleNote";
import AddNote from "./AddNote";

export default function Note() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote);

    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => index !== id);
    });
  }

  return (
    <div>
      <AddNote onAdd={addNote} />
      <div className="notes container">
        {notes.map((note, index) => (
          <SingleNote
            key={index}
            id={index}
            deleteNote={deleteNote}
            title={note.title}
            description={note.description}
          />
        ))}
      </div>
    </div>
  );
}
