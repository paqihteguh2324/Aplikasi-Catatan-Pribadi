import React from "react";

class NoteAppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: "",
    };
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler = (event) => {
    const searchKeyword = event.target.value;
    this.setState({ searchKeyword });
    event.preventDefault();
    if(searchKeyword.trim()){
      this.props.onSearchChange(searchKeyword.trim())
    }
  };

  render() {
  return (
    <div className="note-app__header">
        <h1>Notes</h1>
        <form onChange={this.onSearchChangeHandler}>
        <input type="text" placeholder="Search" value={this.state.search}/>
        </form>
    </div>
  );
}
}

export default NoteAppHeader;