import React from "react";
import NoteList from "./NoteList.jsx";
import NoteInput from "./NoteInput.jsx";

function NoteAppBody({note, onDelete, onMove, onAddNote}) {
  return(
    <div className="note-app__body">
        <h2>
        Buat Catatan
        </h2>
      <NoteInput onAddNote={onAddNote} />
      <NoteList 
      note={note} onDelete={onDelete} onMove={onMove} />
    </div>
  )
}

export default NoteAppBody;