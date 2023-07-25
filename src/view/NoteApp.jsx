import React from "react";
import NoteAppHeader from "./noteAppHeader.jsx";
import NoteAppBody from "./NoteAppBody.jsx";
import { getInitialData } from "..//utils/index.js";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      realNote: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }
  onAddNoteHandler(notes) {
    this.setState((prevState) => {
      return { notes: prevState.notes.concat(notes),
      realNote: prevState.realNote.concat(notes)};
    });
  }

  onSearchChangeHandler = (searchKeyword) => {
    this.setState((prevState) => {
      console.log(searchKeyword.trim());
      if (searchKeyword.trim().length <= 1) {
        this.setState({ notes: this.state.realNote });
      }
      return {
        notes: prevState.realNote.filter((note) => {
          return note.title.toLowerCase().includes(searchKeyword.toLowerCase());
        })
      };
    });
  };

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
    this.setState({ realNote: notes });
  }

  onMoveHandler(id) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      } else {
        return note;
      }
    });

    this.setState({ notes: updatedNotes });
    this.setState({ realNote: updatedNotes });
  }

  render() {
    return (
      <div className="note-app">
        <NoteAppHeader onSearchChange={this.onSearchChangeHandler} />
        <NoteAppBody
          note={this.state.notes}
          onDelete={this.onDeleteHandler}
          onMove={this.onMoveHandler}
          onAddNote={this.onAddNoteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
