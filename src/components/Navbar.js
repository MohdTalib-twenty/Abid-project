import React from "react";
import {Link} from 'react-router-dom'
import './component.css'
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-nav">
            <Link class="nav-link" exact to="/">
              Your
            </Link>
            <Link class="nav-link" exact to="/all">
              All
            </Link>
            <Link class="nav-link" exact to="/block">
              Blocked
            </Link>
           
          </div>
        </div>
      </nav>
    </>
  );
}
