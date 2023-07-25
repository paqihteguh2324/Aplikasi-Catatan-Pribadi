import React from "react";

function NoteItemTitle({title}) {
    return (
        <div className="note-item__title">
        <h2>{title}</h2>
        </div>
    );
    }

export default NoteItemTitle;