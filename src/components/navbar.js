/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Navbar({ user }) {
  return (
    <nav>
      <a href="/">
        <span>Logo</span>
      </a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {user ? (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
