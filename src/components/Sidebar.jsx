import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  FaInstagram,
  FaBars,
  FaYoutube,
  FaPhone,
  FaEnvelope
} from "react-icons/fa"; // Importing Font Awesome icons
import "../assets/css/styles.css";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <>
      {/* Hamburger Menu Icon (only for small screens) */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <img src="/ganesh-portfolio/images/profile.jpeg" alt="Artist" className="profile-pic" />
        <h2 className="artist-name">GANESH CHAVAN</h2>
        <p className="description">
          Creative and skilled artist with 9 years of experience in crafting and
          3D Artworks. Proficient in a variety of materials including clay,
          wood, stone, C4X, Fiber and metal.
        </p>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="tel:+917498768694"
            rel="noopener noreferrer"
            className="icon flipped-icon"
          >
            <FaPhone />
          </a>

          <a
            href="mailto:gc353500@gmail.com"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaEnvelope /> {/* Email icon */}
          </a>

          <a
            href="https://youtube.com/@ganeshchavanart?si=qj-BEmd1nKaBoafE"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.instagram.com/ganesh_chavan_art?igsh=MWJjM3dubjRlYmEyMw=="
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={closeSidebar}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/awards" onClick={closeSidebar}>
                AWARDS
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={closeSidebar}>
                PORTRAIT
              </Link>
            </li>
            <li>
              <Link to="/figure" onClick={closeSidebar}>
                LIFE FIGURE
              </Link>
            </li>
            <li>
              <Link to="/relief" onClick={closeSidebar}>
                RELIEF WORK
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
