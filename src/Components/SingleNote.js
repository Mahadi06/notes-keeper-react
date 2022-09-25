import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SingleNote(props) {
  const { title, description } = props;

  function handleDelete() {
    props.deleteNote(props.id);
  }

  return (
    <div className="note">
      <h1 className="note-title">{title}</h1>
      <p className="note-description">{description}</p>
      <span>
        <FontAwesomeIcon
          onClick={handleDelete}
          className="delete-icon"
          icon={faTrash}
        />
      </span>
    </div>
  );
}
