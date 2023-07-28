import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function noteItem({ id, title, createdAt, body, archived }) {
    return (
        <div className="note-item">
        <li className="note-item__title">
        <Link to={`/note/${id}`}>{title}</Link>
        </li>
        <div>
        <div className="note-item__createdAt">{createdAt}</div>
        <div className="note-item__body" >{body}</div>
        </div>
        </div>
    );
    }

noteItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    body: PropTypes.string,
    archived: PropTypes.bool,
};
export default noteItem;