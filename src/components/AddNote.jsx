import React, { useState } from "react";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  function setState(e) {
    let { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submit(e) {
    props.click(e, note);
    setNote({
      title: "",
      text: "",
    });
  }

  return (
    <>
      <div className="addNote">
        <form>
          <input
            onChange={setState}
            placeholder="Enter Title"
            type="text"
            name="title"
            id="title"
            value={note.title}
            autoComplete="false"
          />
          <input
            onChange={setState}
            type="text"
            name="text"
            id="text"
            placeholder="Enter Content"
            value={note.text}
            autoComplete="false"
            required
          />
          <button
            type="submit"
            className="add"
            onClick={submit}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNote;
