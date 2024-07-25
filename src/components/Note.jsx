// import React from "react";
import DeletedIcon from "@mui/icons-material/Delete";

function Note(props) {
  return ( 
    <div className="note">
      <h3 className="noteTitle">{props.title}</h3>
      <p className="text">{props.text}</p>
      <div className="items">
        <p className="time">{props.time}</p>

        <button className="delete" onClick={props.delete} id={props.id}>
          <DeletedIcon id={props.id} onClick={props.delete}/>
        </button>
      </div>
    </div>
  );
}

export default Note;
