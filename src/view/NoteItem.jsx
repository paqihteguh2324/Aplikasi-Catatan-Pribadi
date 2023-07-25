import React from "react";
import NoteItemTitle from "./NoteItemTitle.jsx";
import NoteItemBody from "./NoteItemBody.jsx";
import NoteItemDate from "./NoteItemDate";
import DeleteButton from "..//components/DeleteButton.jsx";
import ArsipNote from "..//components/ArsipNote.jsx";

function NoteItem({id, title, body, createdAt, archived, onDelete, onMove}) {
    return(
        <div className="note-item">
        <div className="note-item__content">
        <NoteItemTitle title={title} />
        <NoteItemDate date={createdAt} />
        <NoteItemBody body={body} />
        </div>
        <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete}/>
        <ArsipNote id={id} archived={archived} onMove={onMove}/>
        </div>
       </div>
    )
}

export default NoteItem;