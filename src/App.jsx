import Note from "./components/Note.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddNote from "./components/AddNote.jsx";
import React from "react";

function App() {
  const [keeper, setKeeper] = React.useState([]);

  function setKeep(e, values) {
    e.preventDefault();
    const { title, text } = values;
    let time = new Date().toLocaleTimeString();

    setKeeper((prev) => {
      return [
        ...prev,
        { id: keeper.length + 1, title: title, text: text, time: time },
      ];
    });
  }

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
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
