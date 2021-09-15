import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <Link to="/amzn">
            <button class="nav-link" aria-current="page">
              Amazon
            </button>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/flip">
            <button class="nav-link" aria-current="page">
              Flipkart
            </button>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/">
            <button class="nav-link" aria-current="page">
              Home
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
