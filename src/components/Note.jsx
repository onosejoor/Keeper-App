// import React from "react";
import { useState } from "react";

function Note(props) {
  const [edit, setHidden] = useState(false);
  let time = new Date().toLocaleTimeString();
  const [note, setNote] = useState({
    text: props.text,
    title: props.title,
    time: time,
  });

  function hide() {
    setHidden((prev) => {
      return !prev;
    });
  }

  function change(e) {
    let { name, value } = e.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
        time: time,
      };
    });
  }
  return (
    <div className="note" key={props.id}>
      {edit ? (
        <>
          <form className="editForm">
            <input
              className="edit"
              type="text"
              name="title"
              onChange={change}
              value={note.title}
            />
            <textarea
              className="edit"
              type="text"
              name="text"
              onChange={change}
              value={note.text}
              rows={10}
            />

            <div className="items">
              <div>
                <button
                  className="delete edited"
                  onClick={(e) => {
                    e.preventDefault();
                    hide();
                    props.edit(e, note);
                  }}
                  id={props.id}
                  type="submit"
                >
                  Done
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <h3 className="noteTitle">{props.title}</h3>
          <p className="text">{props.text}</p>
          <div className="items">
            <p className="time">{props.time}</p>

            <div className="icon">
              <button className="delete" onClick={props.delete} id={props.id}>
                🗑️
              </button>
              <button
                aria-label="edit pencil"
                className="delete edit pen"
                onClick={hide}
                id={props.id}
              >
                ✏️
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
