import React from "react";
import NoteItem from "./NoteItem.jsx";

function NoteList({ note, onDelete, onMove }) {
  const archivedNotes = note.filter((note) => note.archived === true);
  const activeNotes = note.filter((note) => note.archived === false);
  return (
    <div>
    <h2>Catatan Aktif</h2>
    {activeNotes.length === 0 && <div className="notes-list__empty-message">Tidak ada catatan</div>}
    <div  className="notes-list">
      {note
      .filter((note) => note.archived === false)
      .map((note) => (
        <NoteItem 
        key={note.id}
        onDelete={onDelete}
        onMove={onMove}
        {...note} />
      ))}
    </div>
<br/>
    <h2>Arsip</h2>
    {archivedNotes.length === 0 && <div className="notes-list__empty-message">Tidak ada catatan</div>}
    <div  className="notes-list">
    {note
     .filter((note) => note.archived === true)
    .map((note) => (
        <NoteItem 
        key={note.id}
        onDelete={onDelete}
        onMove={onMove}
        {...note} />
      ))}
    </div>
    </div>

  );
}

export default NoteList;
