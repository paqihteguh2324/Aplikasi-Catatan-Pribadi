import React from "react";
import {FaRegCalendarCheck} from "react-icons/fa";

function DoneButton() {
    return (
        <div>
                <button className="add-new-page__action action" type="submit">
                    <FaRegCalendarCheck />
                </button>
        </div>
    );
}

export default DoneButton;