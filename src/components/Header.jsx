import { useState, useEffect } from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
// import React from "react";

function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => { 
    if (dark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }

  }, [dark]);

  function setD () {
    setDark((prev) => {
      return !prev;
    })
  }


  return (
    <div className="head">
      <header>
        <h1 className="header"><EditNoteIcon/>Keeper</h1>
      </header>
      <button
        className="theme"
        onClick={setD}
        
      >
        <img src={dark ? "/Keeper-App/images/brightness.png" : "/Keeper-App/images/night-mode.png"} />
      </button>
    </div>
  );
}

export default Header;
