import React from "react";
import {FaRegCalendarCheck} from "react-icons/fa";

class AddNewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        };
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onBodyChangeHandler(event) {
        const body = event.target.value;
        this.setState({ body });
    }
    onTitleChangeHandler(event) {
        const title = event.target.value;
        this.setState({ title });
    }
    handleSubmit(event){
        event.preventDefault();
        const { title, body } = this.state;
        if (!title.trim() || !body.trim()) {
            alert("Tolong Isi Form Terlebih Dahulu");
            return;
        }
        this.props.onAddNote({
           title: title.trim(),
              body: body.trim(),
        }
        );
        this.setState({
            title: "",
            body: "",
        });

      };

    render(){
  return (
    <section className="add-new-page">
    <div className="add-new-page__input ">
      <h1>Halaman tambah catatan baru</h1>
      <form onSubmit={this.handleSubmit}>
        <input className="add-new-page__input__title" type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeHandler}/>
        <input className="add-new-page__input__body" placeholder="Isi Catatan" type="text" value={this.state.body} onChange={this.onBodyChangeHandler} />
        <button className="add-new-page__action action" type="submit">
                    <FaRegCalendarCheck />
                </button>
        </form>
    </div>
    </section>   
  );
    }
}

export default AddNewNote;
