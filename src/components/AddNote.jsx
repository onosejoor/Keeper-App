import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });
  const [expanded, setExpanded] = useState(false);

  function exp() {
    setExpanded(true);
  }

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
        <form className="addForm">
          {expanded && (
            <input
              onChange={setState}
              placeholder="Enter Title"
              type="text"
              name="title"
              id="title"
              value={note.title}
              autoComplete="false"
              required={true}
            />
          )}

          <textarea
            onClick={exp}
            onChange={setState}
            type="text"
            name="text"
            placeholder="Enter Content..."
            value={note.text}
            autoComplete="false"
            required={true}
            rows={expanded ? "3" : "2"}
          />
          {expanded && (
            <button type="submit" className="add" onClick={submit}>
              <AddIcon />
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default AddNote;
