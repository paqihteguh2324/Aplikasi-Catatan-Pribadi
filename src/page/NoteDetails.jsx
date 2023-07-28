import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import DeleteButton from "../components/DeleteButton";
import PropTypes from 'prop-types';

function NoteDetails({onDeleteNote}) {
    const { id } = useParams();
    const note = getNote(id);
    return (
        <div className="detail-page">
           <div className="detail-page__title">{note.title}</div>
              <div className="detail-page__createdAt">{note.createdAt}</div>
                <div className="detail-page__body">{note.body}</div>
                <DeleteButton onDeleteNote={onDeleteNote} id={id}/>
        </div>
    );
}

NoteDetails.propTypes = {
    onDeleteNote: PropTypes.func,
};

export default NoteDetails;