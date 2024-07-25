import Note from "./components/Note.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddNote from "./components/AddNote.jsx";
import { useState } from "react";

function App() {
  // useState and localStorage
  const [keeper, setKeeper] = useState(() => {
    const saved = localStorage.getItem("note");
    const data = JSON.parse(saved);
    return data || [];
  });
  localStorage.setItem("note", JSON.stringify(keeper));

  // set keeper App note
  function setKeep(e, values) {
    e.preventDefault();
    const { title, text } = values;
    let time = new Date().toLocaleTimeString();
    if (title || text) {
      setKeeper((prev) => {
        return [
          ...prev,
          { id: keeper.length + 1, title: title, text: text, time: time },
        ];
      });
    } else {
      alert("Both Fields can't be Empty!");
      setKeeper((prev) => {
        return [...prev];
      });
    }
  }

  // to edit notes
  function edit(e, value) {
    let id = parseInt(e.target.id);
    let val = {
      id: id,
      title: value.title,
      text: value.text,
      time: value.time,
    };

    let find = keeper.filter((item) => {
      return item.id !== id;
    });

    setKeeper([val, ...find]);
  }

  // delete a note
  function deleteNote(e) {
    let id = parseInt(e.target.id);
    setKeeper(
      keeper.filter((note) => {
        return note.id !== id;
      })
    );
  }

  return (
    <>
      <div className="App">
        <Header />
        <AddNote click={setKeep} />
        <div id="note">
          {keeper.map((item) => (
            <Note
              id={item.id}
              key={item.id}
              title={item.title}
              text={item.text}
              time={item.time}
              delete={deleteNote}
              edit={edit}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
