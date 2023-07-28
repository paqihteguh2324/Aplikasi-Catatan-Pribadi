import React from 'react';
import ActiveNote from './page/ActiveNote';
import Navigation from './components/Navigation';
import ArchivedNote from './page/ArchivedNote';
import NoteDetails from './page/NoteDetails';
import NewNote from './page/AddNewNote';
import { Routes, Route } from 'react-router-dom';
import { addNote, getActiveNotes, getArchivedNotes, deleteNote } from './utils/local-data';

class AppNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNotes: getActiveNotes(),
      archivedNotes: getArchivedNotes()
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }
  onAddNoteHandler = (note) => {
    console.log(note);
    const title = note.title;
    const body = note.body;
    addNote({title, body});
    this.setState({
      activeNotes: getActiveNotes(),
      archivedNotes: getArchivedNotes()
    });
  }

  onDeleteNoteHandler = (id) => {
    deleteNote (id);
    this.setState({
      activeNotes: getActiveNotes(),
      archivedNotes: getArchivedNotes()
    });
  }

  render() {
  return (
    <div className="app-container">
     <header>
      <Navigation />
     </header>
     <main>
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/" element={<ActiveNote activeNotes={this.state.activeNotes} />} />
        <Route path="/arsip" element={<ArchivedNote archivedNotes={this.state.archivedNotes} />} />
        <Route path="/note/:id" element={<NoteDetails onDeleteNote={this.onDeleteNoteHandler} />} />
        <Route path="/note/new" element={<NewNote onAddNote={this.onAddNoteHandler}/>} />
      </Routes>
      </main>
    </div>
  );
  }
}

export default AppNotes;
