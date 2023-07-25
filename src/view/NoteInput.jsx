import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: +new Date().getTime(),
      title: "",
      body: "",
      createdAt: new Date(),
      archived: false,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const title = event.target.value;
    this.setState({ title });
  }

  onBodyChangeHandler(event) {
    const body = event.target.value;
    this.setState({ body });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    if (!title.trim() || !body.trim()) {
      alert("Tolong Isi Form Terlebih Dahulu");
      return;
    }
    this.props.onAddNote({
      id: +new Date().getTime(),
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date(),
      archived: false,
    });
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    const limit = 50 - this.state.title.length;
    return (
      <div className="note-input">
        <div className="note-input__title__char-limit">
            Sisa Karakter: {limit}
        </div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
            maxLength={50}
          />
          <textarea
            placeholder="Body"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
          <button className="add-note" type="submit">Add Note</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
