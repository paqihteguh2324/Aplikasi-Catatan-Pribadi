import React from "react";
import NoteItem from "./NoteItem";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

function ArchivedNote({ archivedNotes}) {
    const [searchParams] = useSearchParams();
    if (archivedNotes.length===0){return( <> <p>Tidak ada arsip catatan</p>
    </>)
}
    else if(searchParams.get("title")){
        return (
            <div>
                <SearchBar/>
                {
                    archivedNotes
                    .filter((note) =>
                    note.title
                        .toLowerCase()
                        .includes(searchParams.get("title").toLowerCase())
                )
                .map((note) => (
                    <NoteItem key={note.id} {...note} />
                ))
                }
            </div>
        );
    }
    else{
    return (
        <div>
            <SearchBar/>
            {
                archivedNotes.map((note) => (
                    <NoteItem key={note.id} {...note} />
                ))
            }
        </div>
    );
        }
}

ArchivedNote.propTypes = {
    archivedNotes: PropTypes.array,
};

export default ArchivedNote;