import { useState } from "react";

function Notes() {

  const [note, setNote] = useState("");

  const [notes, setNotes] = useState<{ id: number; text: string }[]>(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );

  const [editId, setEditId] = useState<number | null>(null);

  function addNote() {  

    if (note === "") return;

    let updatedNotes;

    if (editId !== null) {
      updatedNotes = notes.map((item) =>
        item.id === editId ? { ...item, text: note } : item
      );
    } else {
      updatedNotes = [...notes, { id: Date.now(), text: note }];
    }

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setNote("");
    setEditId(null);
  }

  function editNote(item: { id: number; text: string }) {
    setNote(item.text);
    setEditId(item.id);
  }

  function deleteNote(id: number) {
    const updatedNotes = notes.filter((item) => item.id !== id);

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  return (
    <div>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note"
      />

      <button onClick={addNote}>
        {editId !== null ? "Update Note" : "Add Note"}
      </button>

      {notes.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>

          <button onClick={() => editNote(item)}>Edit</button>

          <button onClick={() => deleteNote(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Notes;