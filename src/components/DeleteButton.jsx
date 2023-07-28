import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function DeleteButton({id, onDeleteNote}) {

    return (
        <div>
            <Link to="/">
            <button className="add-new-page__action action" type="reset" onClick={()=>onDeleteNote(id)}>
                <FaRegTrashAlt />
            </button>
            </Link>
        </div>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.string,
    onDeleteNote: PropTypes.func,
};

export default DeleteButton;