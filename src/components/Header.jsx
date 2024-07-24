import { useState, useEffect } from "react";

function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => { 
    if (dark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }

  }, [dark]);


  return (
    <div className="head">
      <header>
        <h1 className="header">Keeper</h1>
      </header>
      <button
        className="theme"
        onClick={() => {
          setDark((prev) => {
            return !prev;
          });
        }}
      >
        <img src={dark ? "/images/brightness.png" : "/images/night-mode.png"} />
      </button>
    </div>
  );
}

export default Header;
