import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddNote() {
    return (
        <div>
            <div className="add-note">
                <Link to="/note/new">
                    <button className="add-new-page__action action">
                        <FaRegPlusSquare />
                    </button>
                </Link>
                </div>
        </div>
    );
}

export default AddNote;