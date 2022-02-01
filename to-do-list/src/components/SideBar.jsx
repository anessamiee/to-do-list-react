import React from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <nav className="side-bar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/Tasks">To Do</Link>
        </li>
        <li className="nav-item">
          <Link to="/NewTask">New Task</Link>
        </li>
      </ul>
    </nav>
  );
}
