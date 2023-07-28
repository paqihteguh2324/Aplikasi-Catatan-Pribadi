import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">
              {" "}
              <h1>Aplikasi Catatan </h1>
            </Link>
          </li>
          <li className="note-arsip">
            <Link to="/arsip">Arsip</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
