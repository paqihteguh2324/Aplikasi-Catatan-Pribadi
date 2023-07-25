import React from "react";

function ArsipNote(id) {
    return(
        <button className="note-item__archive-button" onClick={()=> id.onMove(id.id)} >{id.archived ? 'Pindahkan' : 'Arsipkan'}</button>
    )
}

export default ArsipNote;