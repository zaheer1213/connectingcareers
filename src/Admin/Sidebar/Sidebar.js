import {
  faBars,
  faBlog,
  faContactBook,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {window.innerWidth < 768 && (
        <button className="toggle-button baricon" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-menu" style={{ background: "white" }}>
          <NavLink to="/" className="sidebar-item" activeClassName="active">
            <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/admin-contact"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faContactBook} className="sidebar-icon" />
            <span>All Contact</span>
          </NavLink>
          <NavLink
            to="/admin-blogs"
            className="sidebar-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faBlog} className="sidebar-icon" />
            <span>All Blogs</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
