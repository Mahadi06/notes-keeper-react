import React, { useState } from "react";

export default function AddNote(props) {
  const [noteText, setNoteText] = useState({
    title: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteText((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    if (noteText.title !== "" && noteText.description !== "") {
      props.onAdd(noteText);
    } else {
      alert("Fill up the input fields");
    }

    setNoteText({
      title: "",
      description: "",
    });
  }

  return (
    <div className="add-note">
      <form className="wrapper">
        <input
          onChange={handleChange}
          value={noteText.title}
          type="text"
          className="title"
          name="title"
          placeholder="Note title"
        />
        <textarea
          onChange={handleChange}
          value={noteText.description}
          row="10"
          className="description"
          name="description"
          placeholder="Description"
        />
        <span onClick={submitNote} className="add-btn">
          +
        </span>
      </form>
    </div>
  );
}
