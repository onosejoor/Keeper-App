// import React from "react";

function Note(props) {
  return (
    <div className="note" key={props.id}>
      <h3 className="noteTitle">{props.title}</h3>
      <p className="text">{props.text}</p>
      <div className="items">
        <p className="time">{props.time}</p>

        <button className="delete" onClick={props.delete} id={props.id}>
          🗑️
        </button>
      </div>
    </div>
  );
}

export default Note;
