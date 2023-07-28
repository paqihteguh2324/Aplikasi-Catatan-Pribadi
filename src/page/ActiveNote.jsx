import React from "react";
import NoteItem from "./NoteItem";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import AddNote from "../components/AddNote";
import PropTypes from "prop-types";

function ActiveNote({ activeNotes }) {
  const [searchParams] = useSearchParams();
  if (activeNotes.length === 0) {
    return(<> <p>Tidak ada catatan aktif</p>
    <AddNote />
    </>
    )
  }
   else if (searchParams.get("title")) {
     console.log(activeNotes);
    return (
        <div>
             <SearchBar/>
        <div className="notes-list">
            {activeNotes
                .filter((note) =>
                    note.title
                        .toLowerCase()
                        .includes(searchParams.get("title").toLowerCase())
                )
                .map((note) => (
                    <NoteItem key={note.id} {...note} />
                ))}
        </div>
        <AddNote />
        </div>
    );
  } 
  else {
    console.log(activeNotes);
    return (
        <div>
             <SearchBar/>
      <div className="notes-list">
        {activeNotes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </div>
      <AddNote />
      </div>
    );
  }
}

ActiveNote.propTypes = {
  activeNotes: PropTypes.array,
};
export default ActiveNote;
